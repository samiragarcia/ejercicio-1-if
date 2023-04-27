const USUARIO_NOMBRE_REGISTRADO = "pepitas";
const USUARIO_CONTRASENIA_REGISTRADA = "123";
const USUARIO_NOMBRE_REGISTRADO_2 = "pepa";
const USUARIO_CONTRASENIA_REGISTRADA_2 = "abcd";

const inputUsuario = document.querySelector("#usuario-nombre");
const inputContrasenia = document.querySelector("#usuario-contrasenia");
const pResultado = document.querySelector("#resultado");

let usuarioNombreIngresado = "def nombre";
let usuarioContraseniaIngresada = "def contrasenia";

function verificar(){
    usuarioNombreIngresado = inputUsuario.value;
    usuarioContraseniaIngresada = inputContrasenia.value;
    if ((usuarioNombreIngresado == USUARIO_NOMBRE_REGISTRADO && usuarioContraseniaIngresada == USUARIO_CONTRASENIA_REGISTRADA) || (usuarioNombreIngresado == USUARIO_NOMBRE_REGISTRADO_2 && usuarioContraseniaIngresada == USUARIO_CONTRASENIA_REGISTRADA_2)) {
        pResultado.innerHTML = "usuario y contraseña correctos "+usuarioNombreIngresado;   
    }else {
        pResultado.innerHTML = "usuario y contraseña incorrectos";
        pResultado.style.color = "red";
    }
 }