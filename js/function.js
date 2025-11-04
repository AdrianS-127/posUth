//declaracion de variables globales//
var totalVentas = 0;

const productos = [
  [1, "Suéter Elegante Deportivo Verde Militar", 490.24],
  [2, "Jersey Moderno Verde Oliva", 166.79],
  [3, "Chaleco de Punto Vintage Negro", 736.6],
  [4, "Sweater Oversize Deportivo Azul Cielo", 806.42],
  [5, "Cardigan Elegante Verde Oliva", 612.5],
  [6, "Suéter con Botones Básico Naranja", 534.45],
  [7, "Sweater Oversize Elegante Beige", 617.44],
  [8, "Suéter de Cuello Alto Artesanal Amarillo", 451.86],
  [9, "Jersey Moderno Azul Marino", 502.31],
  [10, "Suéter de Cuello Alto Moderno Verde Militar", 444.42],
  [11, "Suéter con Botones Minimalista Rosa", 804.11],
  [12, "Cardigan Moderno Mostaza", 713.14],
  [13, "Hoodie Minimalista Morado", 260.89],
  [14, "Suéter Deportivo Elegante Turquesa", 922.26],
  [15, "Suéter Elegante Minimalista Verde Oliva", 801.58],
  [16, "Chaleco de Punto Elegante Morado", 303.4],
  [17, "Suéter Deportivo Elegante Beige", 670.1],
  [18, "Suéter Casual Básico Gris Claro", 235.93],
  [19, "Suéter Vintage Ligero Celeste", 581.88],
  [20, "Suéter Vintage Básico Amarillo", 536.72],
  [21, "Sweater Oversize Abrigador Gris Claro", 343.35],
  [22, "Jersey Minimalista Celeste", 350.04],
  [23, "Cardigan Minimalista Morado", 324.24],
  [24, "Suéter con Botones Moderno Celeste", 993.98],
  [25, "Suéter Estampado Juvenil Rojo Vino", 171.89],
  [26, "Cardigan Largo Abrigador Mostaza", 778.72],
  [27, "Cardigan Largo Vintage Mostaza", 757.07],
  [28, "Cardigan Largo Moderno Amarillo", 849.8],
  [29, "Suéter Elegante Deportivo Rosa", 600.52],
  [30, "Suéter Casual Elegante Lila", 685.57],
  [31, "Suéter Estampado Clásico Rosa", 945.31],
  [32, "Suéter Estampado Deportivo Celeste", 493.83],
  [33, "Cardigan Largo Clásico Mostaza", 528.51],
  [34, "Suéter Vintage Básico Verde Oliva", 689.56],
  [35, "Cardigan Básico Verde Oliva", 485.16],
  [36, "Jersey Artesanal Gris Oscuro", 745.29],
  [37, "Chaleco de Punto Básico Azul Cielo", 445.44],
  [38, "Suéter Elegante Casual Rojo Vino", 482.25],
  [39, "Suéter Vintage Artesanal Verde Militar", 446.7],
  [40, "Suéter Vintage Blanco", 340.99],
  [41, "Hoodie Oversize Beige", 743.42],
  [42, "Suéter Estampado Básico Beige", 319.26],
  [43, "Cardigan Largo Ligero Negro", 964.33],
  [44, "Suéter con Botones Abrigador Gris Claro", 203.61],
  [45, "Chaleco de Punto Juvenil Beige", 622.91],
  [46, "Suéter Elegante Con Estilo Verde Militar", 181.85],
  [47, "Hoodie Casual Gris Oscuro", 630.49],
  [48, "Pull Over Abrigador Beige", 610.35],
  [49, "Suéter Elegante Vintage Beige", 258.15],
  [50, "Suéter Estampado Elegante Amarillo", 218.74],
  [51, "Hoodie Deportivo Verde Oliva", 793.9],
  [52, "Pull Over Moderno Celeste", 981.94],
  [53, "Jersey Juvenil Verde Militar", 700.8],
  [54, "Pull Over Elegante Celeste", 420.13],
  [55, "Chaleco de Punto Básico Gris Oscuro", 736.11],
  [56, "Chaleco de Punto Casual Rojo Vino", 636.28],
  [57, "Cardigan Largo Oversize Celeste", 568.45],
  [58, "Suéter Casual Artesanal Rosa", 722.37],
  [59, "Pull Over Juvenil Negro", 670.58],
  [60, "Suéter Elegante Casual Gris Claro", 276.03],
  [61, "Suéter Casual Ligero Beige", 282.22],
  [62, "Suéter Estampado Clásico Rosa", 826.06],
  [63, "Suéter Artesanal Verde Militar", 154.5],
  [64, "Pull Over Ligero Marrón", 384.08],
  [65, "Suéter Deportivo Oversize Negro", 398.58],
  [66, "Pull Over Ligero Naranja", 315.56],
  [67, "Suéter Vintage Turquesa", 694.99],
  [68, "Suéter Vintage Juvenil Mostaza", 547.09],
  [69, "Suéter Básico Morado", 302.39],
  [70, "Suéter Estampado Deportivo Rojo", 661.31],
  [71, "Suéter de Cuello Alto Premium Naranja", 537.09],
  [72, "Suéter Deportivo Oversize Gris Oscuro", 277.64],
  [73, "Suéter Vintage Minimalista Blanco", 651.8],
  [74, "Sweater Oversize Ligero Verde Oliva", 618.88],
  [75, "Suéter Casual Premium Verde Oliva", 346.26],
  [76, "Suéter con Botones Casual Turquesa", 419.33],
  [77, "Cardigan Largo Oversize Gris Claro", 398.47],
  [78, "Suéter Deportivo Moderno Amarillo", 358.22],
  [79, "Suéter Elegante Artesanal Azul Cielo", 779.69],
  [80, "Suéter Casual Premium Rosa", 512.69],
  [81, "Suéter Premium Morado", 466.91],
  [82, "Suéter Oversize Beige", 397.25],
  [83, "Chaleco de Punto Oversize Morado", 457.84],
  [84, "Suéter Casual Abrigador Verde Militar", 964.62],
  [85, "Suéter Vintage Casual Azul Cielo", 124.06],
  [86, "Chaleco de Punto Clásico Rosa", 460.35],
  [87, "Cardigan Largo Oversize Rosa", 570.69],
  [88, "Cardigan Clásico Gris Claro", 262.95],
  [89, "Suéter Estampado Casual Rojo Vino", 231.07],
  [90, "Suéter Deportivo Vintage Negro", 320.56],
  [91, "Cardigan Abrigador Mostaza", 710.32],
  [92, "Suéter con Botones Clásico Gris Oscuro", 720.55],
  [93, "Jersey Minimalista Azul Marino", 641.67],
  [94, "Suéter con Botones Juvenil Celeste", 182.7],
  [95, "Suéter con Botones Vintage Amarillo", 433.95],
  [96, "Cardigan Abrigador Beige", 691.5],
  [97, "Suéter con Botones Juvenil Verde Oliva", 842.45],
  [98, "Cardigan Artesanal Naranja", 395.4],
  [99, "Pull Over Ligero Naranja", 815.36],
  [100, "Hoodie Artesanal Lila", 845.03],
];

// ======================
// Variables globales
// ======================
var totalVentas = 0;

// ======================
// Función principal
// ======================
function buscarProducto(evento) {
  const input = document.getElementById("id-Codigo");

  // ENTER → Agregar producto
  if (evento.key === "Enter") {
    let codigoInput = input.value.trim();
    if (!codigoInput) return;

    let cantidad = 1;
    const partes = codigoInput.split(/[\s\*]+/);
    let codigo = parseInt(partes[0]);
    if (partes.length > 1) cantidad = parseInt(partes[1]) || 1;

    const producto = productos.find(p => p[0] === codigo);
    if (producto) {
      agregarProductoTabla(producto, cantidad);
      input.value = "";
    } else {
      notificar("Código no encontrado", "error");
    }
  }

  // ESCAPE → Eliminar última fila
  else if (evento.key === "Escape") {
    eliminarUltimoProducto();
  }

  // + → Aumentar cantidad última fila
  else if (evento.key === "+") {
    evento.preventDefault();
    modificarCantidadUltimo(1);
  }

  // - → Disminuir cantidad última fila
  else if (evento.key === "-") {
    evento.preventDefault();
    modificarCantidadUltimo(-1);
  }

  // C → Mostrar modal clave
  else if (evento.key.toLowerCase() === "c") {
    evento.preventDefault();
    mostrarModalClave();
  }

  // P → Cerrar venta
  else if (evento.key.toLowerCase() === "p") {
    evento.preventDefault();
    cerrarVenta();
  }
}

// ======================
// Funciones auxiliares
// ======================

function agregarProductoTabla(producto, cantidad) {
  const tabla = document.getElementById("bd-contenido");
  const renglon = tabla.insertRow(-1);

  const celda1 = renglon.insertCell(0);
  const celda2 = renglon.insertCell(1);
  const celda3 = renglon.insertCell(2);
  const celda4 = renglon.insertCell(3);
  const celda5 = renglon.insertCell(4);

  celda1.textContent = cantidad;
  celda2.textContent = producto[1];
  celda3.textContent = producto[2].toFixed(2);
  celda4.textContent = (producto[2] * cantidad).toFixed(2);
  celda1.style.textAlign = celda2.style.textAlign = celda3.style.textAlign = celda4.style.textAlign = "center";

  // Botón eliminar individual
  celda5.innerHTML = `<button class="btn-borrar">❌</button>`;
  celda5.style.textAlign = "center";
  celda5.querySelector("button").onclick = () => {
    totalVentas -= producto[2] * cantidad;
    renglon.remove();
    actualizarTotal();
  };

  totalVentas += producto[2] * cantidad;
  actualizarTotal();
}

function eliminarUltimoProducto() {
  const tabla = document.getElementById("bd-contenido");
  const filas = tabla.rows.length;
  if (filas === 0) return notificar("No hay productos para eliminar", "error");

  const ultimaFila = tabla.rows[filas - 1];
  const subtotal = parseFloat(ultimaFila.cells[3].textContent);
  totalVentas -= subtotal;
  tabla.deleteRow(filas - 1);
  actualizarTotal();
}

function modificarCantidadUltimo(cambio) {
  const tabla = document.getElementById("bd-contenido");
  const filas = tabla.rows.length;
  if (filas === 0) return;

  const ultimaFila = tabla.rows[filas - 1];
  const cantidadActual = parseInt(ultimaFila.cells[0].textContent);
  const precio = parseFloat(ultimaFila.cells[2].textContent);

  const nuevaCantidad = cantidadActual + cambio;
  if (nuevaCantidad <= 0) {
    totalVentas -= precio * cantidadActual;
    tabla.deleteRow(filas - 1);
  } else {
    const nuevoSubtotal = precio * nuevaCantidad;
    totalVentas += (nuevoSubtotal - precio * cantidadActual);
    ultimaFila.cells[0].textContent = nuevaCantidad;
    ultimaFila.cells[3].textContent = nuevoSubtotal.toFixed(2);
  }
  actualizarTotal();
}

function actualizarTotal() {
  document.getElementById("total").innerHTML = "Total: $" + totalVentas.toFixed(2);
}

// ======================
// MODAL DE CLAVE
// ======================
function mostrarModalClave() {
  if (document.getElementById("modalClave")) return;

  const overlay = document.createElement("div");
  overlay.id = "modalClave";
  overlay.style.cssText = `
    position:fixed;top:0;left:0;width:100%;height:100%;
    background:rgba(0,0,0,0.6);display:flex;
    justify-content:center;align-items:center;z-index:9999;`;

  const modal = document.createElement("div");
  modal.style.cssText = `
    background:white;padding:20px;border-radius:10px;text-align:center;
    width:300px;box-shadow:0 4px 10px rgba(0,0,0,0.3);`;

  modal.innerHTML = `
    <h3>Ingrese clave de administrador</h3>
    <input type="password" id="inputClave" placeholder="Clave" style="width:80%;padding:8px;border:1px solid #ccc;border-radius:5px;">
    <div style="margin-top:15px;">
      <button id="btnAceptar" class="btn-azul">Aceptar</button>
      <button id="btnCancelar" class="btn-gris">Cancelar</button>
    </div>
  `;

  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  const inputClave = document.getElementById("inputClave");
  inputClave.focus();

  document.getElementById("btnAceptar").onclick = () => {
    verificarClave(inputClave.value);
    cerrarModal();
  };
  document.getElementById("btnCancelar").onclick = cerrarModal;
  overlay.onclick = e => { if (e.target === overlay) cerrarModal(); };
  inputClave.addEventListener("keypress", e => { if (e.key === "Enter") document.getElementById("btnAceptar").click(); });
}

function verificarClave(clave) {
  if (clave === "12345") {
    notificar("Venta cancelada.", "ok");
    const tabla = document.getElementById("bd-contenido");
    tabla.innerHTML = "";
    totalVentas = 0;
    actualizarTotal();
  } else {
    notificar("Clave incorrecta.", "error");
  }
}

// ======================
// CIERRE DE VENTA
// ======================
function cerrarVenta() {
  const input = document.getElementById("id-Codigo");
  const valor = input.value.trim();

  if (totalVentas <= 0) return notificar("No hay productos en la venta.", "error");
  if (!valor) return notificar("Ingrese el monto con el que paga el cliente.", "error");

  const monto = parseFloat(valor);
  if (isNaN(monto) || monto <= 0) return notificar("Monto inválido.", "error");
  if (monto < totalVentas) {
    const faltante = (totalVentas - monto).toFixed(2);
    return notificar(`Faltan $${faltante} para completar el pago.`, "error");
  }

  const cambio = (monto - totalVentas).toFixed(2);
  document.getElementById("total").innerHTML = "Cambio: $" + cambio;
  notificar(`Venta finalizada. Cambio: $${cambio}`, "ok");

  document.getElementById("id-Codigo").value = "";
  document.getElementById("bd-contenido").innerHTML = "";
  totalVentas = 0;
}

// ======================
// NOTIFICACIONES
// ======================
function notificar(mensaje, tipo = "info") {
  const div = document.createElement("div");
  div.textContent = mensaje;
  div.style.cssText = `
    position:fixed;bottom:10px;right:10px;
    background:${tipo === "error" ? "#d9534f" : "#28a745"};
    color:white;padding:10px 15px;border-radius:5px;
    font-weight:bold;z-index:99999;box-shadow:0 2px 5px rgba(0,0,0,0.2);
  `;
  document.body.appendChild(div);
  setTimeout(() => div.remove(), 2500);
}

// ======================
// MODALES DE PAGO
// ======================
function abrirModal(tipo) {
  const modal = document.getElementById("miModal");
  const contenido = document.getElementById("contenidoModal");

  switch (tipo) {
    case "internet":
      contenido.innerHTML = `
        <h2>Pago de Internet</h2>
        <p>Introduce tu número de cuenta y el monto a pagar.</p>
        <input type="text" id="cuentaInternet" placeholder="Número de cuenta" />
        <input type="number" id="montoInternet" placeholder="Monto" />
        <button id="btnPagarInternet">Confirmar</button>
      `;
      document.getElementById("btnPagarInternet").onclick = () => {
        const cuenta = document.getElementById("cuentaInternet").value.trim();
        const monto = document.getElementById("montoInternet").value.trim();
        if (!/^\d{6,}$/.test(cuenta)) return notificar("Número de cuenta inválido.", "error");
        if (monto <= 0) return notificar("Monto inválido.", "error");
        confirmar(`Pago de Internet\nCuenta: ${cuenta}\nMonto: $${monto}`);
      };
      break;

    case "agua":
      contenido.innerHTML = `
        <h2>Pago de Agua</h2>
        <p>Introduce tu número de cuenta y el monto a pagar.</p>
        <input type="text" id="cuentaAgua" placeholder="Número de cuenta" />
        <input type="number" id="montoAgua" placeholder="Monto" />
        <button id="btnPagarAgua">Confirmar</button>
      `;
      document.getElementById("btnPagarAgua").onclick = () => {
        const cuenta = document.getElementById("cuentaAgua").value.trim();
        const monto = document.getElementById("montoAgua").value.trim();
        if (!/^\d{6,}$/.test(cuenta)) return notificar("Número de cuenta inválido.", "error");
        if (monto <= 0) return notificar("Monto inválido.", "error");
        confirmar(`Pago de Agua\nCuenta: ${cuenta}\nMonto: $${monto}`);
      };
      break;

    case "transferencia":
      contenido.innerHTML = `
        <h2>Transferencia Bancaria</h2>
        <p>Introduce los datos de la cuenta destino.</p>
        <input type="text" id="cuentaDestino" placeholder="Cuenta destino" />
        <input type="number" id="montoTransferencia" placeholder="Monto" />
        <input type="text" id="numTarjeta" placeholder="Número de tarjeta" />
        <div id="msgTarjeta" style="color:crimson;font-size:14px;margin-top:4px;"></div>
        <button id="btnValidar">Validar Tarjeta</button>
        <button id="btnEnviar" disabled>Enviar</button>
      `;
      const inputTarjeta = document.getElementById("numTarjeta");
      const msg = document.getElementById("msgTarjeta");
      const btnValidar = document.getElementById("btnValidar");
      const btnEnviar = document.getElementById("btnEnviar");

      const onlyDigits = s => (s || '').replace(/\D/g, '');
      const luhnCheck = number => {
        const digits = onlyDigits(number);
        let sum = 0, shouldDouble = false;
        for (let i = digits.length - 1; i >= 0; i--) {
          let d = +digits[i];
          if (shouldDouble) d = d * 2 > 9 ? d * 2 - 9 : d * 2;
          sum += d;
          shouldDouble = !shouldDouble;
        }
        return sum % 10 === 0;
      };

      inputTarjeta.addEventListener("input", () => {
        inputTarjeta.value = onlyDigits(inputTarjeta.value).replace(/(\d{4})(?=\d)/g, "$1 ").trim();
        msg.textContent = "";
        btnEnviar.disabled = true;
      });

      btnValidar.onclick = () => {
        const num = onlyDigits(inputTarjeta.value);
        if (num.length < 12) return msg.textContent = "Número demasiado corto.";
        if (!luhnCheck(num)) return msg.textContent = "Número inválido (Luhn).";
        msg.textContent = "Número válido ✅";
        msg.style.color = "green";
        btnEnviar.disabled = false;
      };

      btnEnviar.onclick = () => {
        const cuenta = document.getElementById("cuentaDestino").value.trim();
        const monto = document.getElementById("montoTransferencia").value.trim();
        if (!/^\d{6,}$/.test(cuenta)) return notificar("Cuenta destino inválida.", "error");
        if (monto <= 0) return notificar("Monto inválido.", "error");
        confirmar(`Transferencia enviada\nDestino: ${cuenta}\nMonto: $${monto}`);
      };
      break;

    case "luz":
      contenido.innerHTML = `
        <h2>Pago de Luz</h2>
        <input type="text" id="servicioLuz" placeholder="Número de servicio" />
        <input type="number" id="montoLuz" placeholder="Monto" />
        <button id="btnPagarLuz">Pagar</button>
      `;
      document.getElementById("btnPagarLuz").onclick = () => {
        const servicio = document.getElementById("servicioLuz").value.trim();
        const monto = document.getElementById("montoLuz").value.trim();
        if (!/^\d{6,}$/.test(servicio)) return notificar("Número de servicio inválido.", "error");
        if (monto <= 0) return notificar("Monto inválido.", "error");
        confirmar(`Pago de Luz\nServicio: ${servicio}\nMonto: $${monto}`);
      };
      break;

    case "saldoCelular":
      contenido.innerHTML = `
        <h2>Recarga de Saldo</h2>
        <input type="text" id="telefono" placeholder="Número de teléfono" />
        <input type="number" id="montoCelular" placeholder="Monto" />
        <button id="btnRecargar">Recargar</button>
      `;
      document.getElementById("btnRecargar").onclick = () => {
        const numero = document.getElementById("telefono").value.trim();
        const monto = document.getElementById("montoCelular").value.trim();
        if (!/^\d{10}$/.test(numero)) return notificar("Número de teléfono inválido.", "error");
        if (monto <= 0) return notificar("Monto inválido.", "error");
        confirmar(`Recarga exitosa\nNúmero: ${numero}\nMonto: $${monto}`);
      };
      break;

    default:
      contenido.innerHTML = `<p>Acción no reconocida.</p>`;
  }

  modal.style.display = "block";
}

function cerrarModal() {
  const modal = document.getElementById("miModal");
  if (modal) modal.style.display = "none";
}

window.addEventListener("click", e => {
  const modal = document.getElementById("miModal");
  if (e.target === modal) cerrarModal();
});

function confirmar(tipo) {
  notificar(`Confirmado: ${tipo}`, "ok");
  cerrarModal();
}
