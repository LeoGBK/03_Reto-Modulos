function checkEmail(correo) {
    const Regex = /[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+/;
    if (Regex.test(correo)) {
        return true;
    }
}

let direccion = "leo@academia-x.com";

checkEmail(direccion);