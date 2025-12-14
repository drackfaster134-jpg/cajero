let usuarios = JSON.parse(localStorage.getItem("usuarios")) || {
const historial = document.getElementById("historial");
historial.innerHTML = "";
usuarios[usuarioActual].historial.forEach(m => {
const li = document.createElement("li");
li.textContent = m;
historial.appendChild(li);
});
guardar();
}


function retirar() {
const monto = Number(document.getElementById("monto").value);
if (monto > 0 && monto <= usuarios[usuarioActual].saldo) {
usuarios[usuarioActual].saldo -= monto;
usuarios[usuarioActual].historial.push(`Retiro: -S/ ${monto}`);
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


function transferir() {
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


actualizar();
}


function logout() {
usuarioActual = null;
document.getElementById("menu").style.display = "none";
document.getElementById("login").style.display = "block";
