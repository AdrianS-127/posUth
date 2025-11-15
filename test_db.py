import pymysql
from dotenv import load_dotenv
import os

print("=" * 50)
print("DIAGNÓSTICO DE CONEXIÓN A BASE DE DATOS")
print("=" * 50)

# Cargar variables de entorno
load_dotenv()

DB_CONFIG = {
    "host": os.getenv("DB_HOST", "localhost"),
    "user": os.getenv("DB_USER", "root"),
    "password": os.getenv("DB_PASSWORD", ""),
    "database": os.getenv("DB_NAME", "pos"),
    "port": int(os.getenv("DB_PORT", 3307)),
    "cursorclass": pymysql.cursors.Cursor
}

print("\n1. CONFIGURACIÓN DETECTADA:")
print(f"   Host: {DB_CONFIG['host']}")
print(f"   Puerto: {DB_CONFIG['port']}")
print(f"   Usuario: {DB_CONFIG['user']}")
print(f"   Password: {'(configurada)' if DB_CONFIG['password'] else '(vacía)'}")
print(f"   Base de datos: {DB_CONFIG['database']}")

print("\n2. INTENTANDO CONECTAR...")

try:
    conn = pymysql.connect(**DB_CONFIG)
    print("   ✓ Conexión exitosa!")
    
    print("\n3. VERIFICANDO BASE DE DATOS...")
    cursor = conn.cursor()
    cursor.execute("SELECT DATABASE()")
    db_name = cursor.fetchone()[0]
    print(f"   ✓ Base de datos activa: {db_name}")
    
    print("\n4. LISTANDO TABLAS:")
    cursor.execute("SHOW TABLES")
    tables = cursor.fetchall()
    if tables:
        for table in tables:
            print(f"   - {table[0]}")
    else:
        print("   ⚠ No hay tablas en la base de datos")
    
    print("\n5. CONTANDO PRODUCTOS:")
    cursor.execute("SELECT COUNT(*) FROM productos")
    count = cursor.fetchone()[0]
    print(f"   ✓ Total de productos: {count}")
    
    if count > 0:
        print("\n6. MUESTRA DE PRODUCTOS (primeros 5):")
        cursor.execute("SELECT codigo_producto, nombre_producto, precio_producto FROM productos LIMIT 5")
        productos = cursor.fetchall()
        for p in productos:
            print(f"   - Código: {p[0]}, Nombre: {p[1]}, Precio: ${p[2]}")
    
    cursor.close()
    conn.close()
    
    print("\n" + "=" * 50)
    print("✓ DIAGNÓSTICO COMPLETADO - TODO OK")
    print("=" * 50)

except pymysql.MySQLError as e:
    print(f"\n   ✗ ERROR DE CONEXIÓN")
    print(f"\n   Código de error: {e.args[0]}")
    print(f"   Mensaje: {e.args[1]}")
    
    print("\n" + "=" * 50)
    print("POSIBLES SOLUCIONES:")
    print("=" * 50)
    
    if e.args[0] == 2003:
        print("1. Verifica que MySQL/MariaDB esté ejecutándose.")
        print("2. Verifica el puerto (3306 o 3307).")
    elif e.args[0] == 1045:
        print("1. Usuario o contraseña incorrectos.")
        print("2. Revisa tu archivo .env.")
    elif e.args[0] == 1049:
        print("1. La base de datos no existe (pos).")
    else:
        print("Error desconocido. Revisa tu servidor MySQL/MariaDB.")
    
    print("=" * 50)

except Exception as e:
    print(f"\n   ✗ ERROR INESPERADO: {str(e)}")
    print("\nVerifica que tengas instalados:")
    print("   pip install pymysql python-dotenv")
