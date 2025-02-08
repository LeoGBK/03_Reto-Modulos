function checkEmail(correo) {
    const Regex = /[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+/;
    if (Regex.test(correo)) {
        console.log("El dato revisado SÍ es un correo electrónico.");
        else {
            console.log("El dato revisado NO es una dirección de correo electrónico.");
        }
    }
}

let direccion = "leo@academia-x.com";

checkEmail(direccion);