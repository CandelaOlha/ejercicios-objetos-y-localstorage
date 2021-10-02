// Ejercicio 1

const usuario1 = {
    nombreUsuario: "Candela", 
    contrasenia: "Hola123", 
}

const usuario2 = {
    nombreUsuario: "Agustina", 
    contrasenia: "Hola123", 
}

const usuario3 = {
    nombreUsuario: "Griselda", 
    contrasenia: "Hola123", 
}

// Ejercicio 2

const nombre = document.querySelector("#nombre");

const saludar = (objeto) => {
    nombre.textContent = `Hola, ${objeto.nombreUsuario}`;
}

// Ejercicio 3

saludar(usuario1);
saludar(usuario2);
saludar(usuario3);

// Ejercicio 4

const modificarNombreDeUsuario = (usuario, nuevoNombre) => {

    usuario.nombreUsuario = nuevoNombre;

    return usuario;
}

// Ejercicio 5

console.log(modificarNombreDeUsuario(usuario1, "Mercedes"));
console.log(modificarNombreDeUsuario(usuario2, "Male"));
console.log(modificarNombreDeUsuario(usuario3, "Ivi"));

// Ejercicio 6

const modificarContrasenia = (usuario, nuevaContrasenia) => {
    
    usuario.contrasenia = nuevaContrasenia;

    return usuario;
}

// Ejercicio 7

console.log(modificarContrasenia(usuario1, "papafrita"));
console.log(modificarContrasenia(usuario2, "NuevaContrasenia123"));
console.log(modificarContrasenia(usuario3, "NuevaContrasenia123"));

// Ejercicio 8

const convertirAJSON = (usuario) => {
    const objetoConvertidoAJSON = JSON.stringify(usuario); // Duda: por que hay que hacer una variable aca

    return objetoConvertidoAJSON;
}

console.log(convertirAJSON(usuario1));

// Ejercicio 9

const convertirDesdeJSON = (objetoJSON) => {
    const JSONConvertidoAObjeto = JSON.parse(objetoJSON);

    return JSONConvertidoAObjeto;
}

// Ejercicio 10

console.log(convertirDesdeJSON(convertirAJSON(usuario1)));
console.log(convertirDesdeJSON(convertirAJSON(usuario2)));
console.log(convertirDesdeJSON(convertirAJSON(usuario3))); // ES UN QUILOMBO DE EXPLICAR PERO FUNCIONA

// Ejercicio 11

const guardarEnLocalStorage = (objeto, string) => {
    
    const objetoConvertidoAJSON = convertirAJSON(objeto);
    localStorage.setItem(string, objetoConvertidoAJSON);
}

console.log(guardarEnLocalStorage(usuario1, 'nombre'));

// Ejercicio 12

const leerDesdeLocalStorage = (clave) => {
    
    const objetoGuardado = localStorage.getItem(clave);
    const objetoDeJavascript = convertirDesdeJSON(objetoGuardado);

    return objetoDeJavascript;
}

console.log(leerDesdeLocalStorage('nombre'));