// Import statement.
import { checkEmail } from './verify.js'

// Declaring 2 variables to test function output.
let direccion1 = "leo@academia-x.com";
let direccion2 = "leo_academia-x.com";

// Calling the function checkEmail which is declared in the module file. Testing 2 variables.
checkEmail(direccion1);
checkEmail(direccion2);