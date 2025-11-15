from flask import Flask, jsonify, render_template, request
from flask_cors import CORS
import pymysql
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
CORS(app)

DB_CONFIG = {
    "host": os.getenv("DB_HOST", "localhost"),
    "user": os.getenv("DB_USER", "root"),
    "password": os.getenv("DB_PASSWORD", ""),
    "database": os.getenv("DB_NAME", "pos"),
    "port": int(os.getenv("DB_PORT", 3307)),
    "charset": "utf8mb4",
    "cursorclass": pymysql.cursors.DictCursor  # <<< clave para JSON
}

def get_db_connection():
    try:
        conn = pymysql.connect(**DB_CONFIG)
        return conn
    except pymysql.MySQLError as e:
        print(f"Error de conexión: {e}")
        return None


@app.route("/")
def root():
    return render_template("index.html")


# =======================
#   PRODUCTOS
# =======================
@app.route("/productos", methods=["GET"])
def obtener_productos():
    conn = get_db_connection()
    if not conn:
        return jsonify({"error": "Error de conexión a la base de datos"}), 500
    
    cursor = conn.cursor()
    try:
        cursor.execute("SELECT codigo_producto, nombre_producto, precio_producto FROM productos ORDER BY codigo_producto")
        productos = cursor.fetchall()
        return jsonify(productos)
    except pymysql.MySQLError as e:
        return jsonify({"error": f"Error al obtener productos: {str(e)}"}), 500
    finally:
        cursor.close()
        conn.close()


@app.route("/productos/<int:codigo>", methods=["GET"])
def obtener_producto(codigo):
    conn = get_db_connection()
    if not conn:
        return jsonify({"error": "Error de conexión a la base de datos"}), 500
    
    cursor = conn.cursor()
    try:
        cursor.execute("SELECT codigo_producto, nombre_producto, precio_producto FROM productos WHERE codigo_producto = %s", (codigo,))
        producto = cursor.fetchone()
        
        if not producto:
            return jsonify({"error": "Producto no encontrado"}), 404
        
        return jsonify(producto)
    except pymysql.MySQLError as e:
        return jsonify({"error": f"Error al obtener producto: {str(e)}"}), 500
    finally:
        cursor.close()
        conn.close()


@app.route("/productos/buscar/<termino>", methods=["GET"])
def buscar_productos(termino):
    conn = get_db_connection()
    if not conn:
        return jsonify({"error": "Error de conexión a la base de datos"}), 500
    
    cursor = conn.cursor()
    try:
        query = """
            SELECT codigo_producto, nombre_producto, precio_producto 
            FROM productos 
            WHERE nombre_producto LIKE %s OR CAST(codigo_producto AS CHAR) LIKE %s
            ORDER BY nombre_producto
        """
        cursor.execute(query, (f"%{termino}%", f"%{termino}%"))
        productos = cursor.fetchall()
        return jsonify(productos)
    except pymysql.MySQLError as e:
        return jsonify({"error": f"Error al buscar productos: {str(e)}"}), 500
    finally:
        cursor.close()
        conn.close()


# =======================
#   VENTAS
# =======================
@app.route("/ventas", methods=["POST"])
def registrar_venta():
    conn = get_db_connection()
    if not conn:
        return jsonify({"error": "Error de conexión a la base de datos"}), 500
    
    cursor = conn.cursor()
    try:
        cursor.execute("INSERT INTO ventas (fecha, hora) VALUES (CURDATE(), CURTIME())")
        venta_id = cursor.lastrowid
        
        conn.commit()
        return jsonify({"message": "Venta registrada exitosamente", "id_venta": venta_id})
    except pymysql.MySQLError as e:
        conn.rollback()
        return jsonify({"error": f"Error al registrar venta: {str(e)}"}), 500
    finally:
        cursor.close()
        conn.close()


@app.route("/ventas", methods=["GET"])
def obtener_ventas():
    conn = get_db_connection()
    if not conn:
        return jsonify({"error": "Error de conexión a la base de datos"}), 500
    
    cursor = conn.cursor()
    limit = request.args.get('limit', default=50, type=int)
    
    try:
        cursor.execute("""
            SELECT id_venta, fecha, hora
            FROM ventas
            ORDER BY fecha DESC, hora DESC
            LIMIT %s
        """, (limit,))
        ventas = cursor.fetchall()
        return jsonify(ventas)
    except pymysql.MySQLError as e:
        return jsonify({"error": f"Error al obtener ventas: {str(e)}"}), 500
    finally:
        cursor.close()
        conn.close()


@app.route("/ventas/<int:venta_id>", methods=["GET"])
def obtener_detalle_venta(venta_id):
    conn = get_db_connection()
    if not conn:
        return jsonify({"error": "Error de conexión a la base de datos"}), 500
    
    cursor = conn.cursor()
    try:
        cursor.execute("""
            SELECT id_venta, fecha, hora
            FROM ventas
            WHERE id_venta = %s
        """, (venta_id,))
        venta = cursor.fetchone()
        
        if not venta:
            return jsonify({"error": "Venta no encontrada"}), 404
        
        return jsonify(venta)
    except pymysql.MySQLError as e:
        return jsonify({"error": f"Error al obtener detalle de venta: {str(e)}"}), 500
    finally:
        cursor.close()
        conn.close()


@app.route("/ventas/<int:venta_id>", methods=["DELETE"])
def eliminar_venta(venta_id):
    conn = get_db_connection()
    if not conn:
        return jsonify({"error": "Error de conexión a la base de datos"}), 500
    
    cursor = conn.cursor()
    try:
        cursor.execute("DELETE FROM ventas WHERE id_venta = %s", (venta_id,))
        
        if cursor.rowcount == 0:
            return jsonify({"error": "Venta no encontrada"}), 404
        
        conn.commit()
        return jsonify({"message": "Venta eliminada exitosamente"})
    except pymysql.MySQLError as e:
        conn.rollback()
        return jsonify({"error": f"Error al eliminar venta: {str(e)}"}), 500
    finally:
        cursor.close()
        conn.close()


# =======================
#   TEST
# =======================
@app.route("/test-connection", methods=["GET"])
def test_connection():
    conn = get_db_connection()
    if not conn:
        return jsonify({
            "status": "error",
            "message": "No se pudo conectar a la base de datos",
            "config": {
                "host": DB_CONFIG["host"],
                "port": DB_CONFIG["port"],
                "database": DB_CONFIG["database"],
                "user": DB_CONFIG["user"]
            }
        }), 500
    
    try:
        cursor = conn.cursor()
        cursor.execute("SELECT DATABASE()")
        db_name = cursor.fetchone()["DATABASE()"]
        
        cursor.execute("SHOW TABLES")
        tables = [table["Tables_in_" + DB_CONFIG["database"]] for table in cursor.fetchall()]
        
        cursor.close()
        conn.close()
        
        return jsonify({
            "status": "success",
            "message": "Conexión exitosa",
            "database": db_name,
            "tables": tables
        })
    except pymysql.MySQLError as e:
        return jsonify({
            "status": "error",
            "message": f"Error al consultar la base de datos: {str(e)}"
        }), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)
