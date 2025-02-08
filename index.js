function checkEmail(correo) {
    const Regex = /[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+/;
    if (Regex.test(correo))
        console.log("El dato revisado SÍ es una dirección de correo electrónico.");
    else
        console.log("El dato revisado NO es una dirección de correo electrónico.");
}

let direccion1 = "leo@academia-x.com";
let direccion2 = "leo_academia-x.com";

checkEmail(direccion1);
checkEmail(direccion2);