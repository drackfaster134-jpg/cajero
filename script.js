let saldo = 1000;
const PIN_CORRECTO = "1234";

function login() {
    const pin = document.getElementById("pin").value;

    if (pin === PIN_CORRECTO) {
        document.getElementById("login").style.display = "none";
        document.getElementById("menu").style.display = "block";
        actualizarSaldo();
    } else {
        alert("PIN incorrecto");
    }
}

function actualizarSaldo() {
    document.getElementById("saldo").textContent = saldo;
}

function retirar() {
    const monto = Number(document.getElementById("monto").value);

    if (monto > saldo) {
        alert("Saldo insuficiente");
    } else if (monto <= 0) {
        alert("Monto inválido");
    } else {
        saldo -= monto;
        actualizarSaldo();
    }
}

function depositar() {
    const monto = Number(document.getElementById("monto").value);

    if (monto <= 0) {
        alert("Monto inválido");
    } else {
        saldo += monto;
        actualizarSaldo();
    }
}

function salir() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("login").style.display = "block";
    document.getElementById("pin").value = "";
}
