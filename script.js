let usuarios = JSON.parse(localStorage.getItem("usuarios")) || {
juan: { pin: "1111", saldo: 1000, historial: [] },
maria: { pin: "2222", saldo: 1500, historial: [] }
};


let usuarioActual = null;


function guardar() {
localStorage.setItem("usuarios", JSON.stringify(usuarios));
}


function login() {
const user = document.getElementById("usuario").value;
const pin = document.getElementById("pin").value;


if (usuarios[user] && usuarios[user].pin === pin) {
usuarioActual = user;
document.getElementById("login").style.display = "none";
document.getElementById("menu").style.display = "block";
document.getElementById("nombre").textContent = user;
actualizar();
} else {
alert("Usuario o PIN incorrecto");
}
}


function actualizar() {
document.getElementById("saldo").textContent = usuarios[usuarioActual].saldo;
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


function logout() {
usuarioActual = null;
document.getElementById("menu").style.display = "none";
document.getElementById("login").style.display = "block";
}
