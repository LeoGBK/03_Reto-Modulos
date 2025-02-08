// Export statement for function checkEmail.
export function checkEmail(correo) {
    // Applying Regular Expression for email address format in order to check if email string is valid.
    const Regex = /[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+/;
    // If condition testing Regular Expression to check validity of email format.
    if (Regex.test(correo))
        console.log("El dato revisado SÍ es una dirección de correo electrónico.");
    else
        console.log("El dato revisado NO es una dirección de correo electrónico.");
}

// Export default statement for the whole module file.
export default checkEmail;