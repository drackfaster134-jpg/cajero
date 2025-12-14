let usuarios = JSON.parse(localStorage.getItem("usuarios")) || {
actualizar();
} else {
alert("Monto inválido");
}
}


function depositar() {
const monto = Number(document.getElementById("monto").value);
if (monto > 0) {
usuarios[usuarioActual].saldo += monto;
usuarios[usuarioActual].historial.push(`Depósito: +S/ ${monto}`);
actualizar();
} else {
alert("Monto inválido");
}
}


function abrirTransferencia() {
document.getElementById("menu").querySelectorAll("input, button").forEach(e => e.style.display = "none");
document.getElementById("pantallaTransferencia").style.display = "block";
}


function volverMenu() {
document.getElementById("pantallaTransferencia").style.display = "none";
document.getElementById("menu").querySelectorAll("input, button").forEach(e => e.style.display = "block");
}


function ejecutarTransferencia() {
const destino = document.getElementById("destino").value;
const monto = Number(document.getElementById("montoTransferir").value);


if (!usuarios[destino]) {
alert("Usuario destino no existe");
return;
}


if (destino === usuarioActual) {
alert("No puedes transferirte a ti mismo");
return;
}


if (monto <= 0 || monto > usuarios[usuarioActual].saldo) {
alert("Monto inválido o saldo insuficiente");
return;
}


usuarios[usuarioActual].saldo -= monto;
usuarios[destino].saldo += monto;


usuarios[usuarioActual].historial.push(`Transferencia enviada a ${destino}: -S/ ${monto}`);
usuarios[destino].historial.push(`Transferencia recibida de ${usuarioActual}: +S/ ${monto}`);


document.getElementById("destino").value = "";
document.getElementById("montoTransferir").value = "";


volverMenu();
actualizar();
}


function logout() {
usuarioActual = null;
document.getElementById("menu").style.display = "none";
document.getElementById("login").style.display = "block";
