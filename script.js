const USUARIO_NOMBRE_REGISTRADO =" pepitas "
const USUARIO_CONTRASENA_REGISTRADA =" 123 "
const USUARIO_NOMBRE_REGISTRADO_2 =" pepa "
const USUARIO_CONTRASEÑA_REGISTRADA_2 =" abcd "

let usuarioNombreIngresado = prompt ("ingrese nombre");
let usuarioContrasenaIngresada = prompt ("ingrese su contraseña");

if ((usuarioNombreIngresado == USUARIO_NOMBRE_REGISTRADO && usuarioContrasenaIngresada == USUARIO_CONTRASENA_REGISTRADA) || (usuarioNombreIngresado == USUARIO_NOMBRE_REGISTRADO_2 && usuarioContrasenaIngresada == USUARIO_CONTRASEÑA_REGISTRADA_2)) {
document.write ("puede pasar");    
}
else {
    document.write ("no puede pasar")
}