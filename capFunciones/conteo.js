function contarFs(cadena) {
  let cont = 0;
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] === "F") {
      cont++;
    }
  }
  return cont;
}

console.log(contarFs("erffff"));

function contarCaracteres(cadena, caracter) {
  let cont = 0;
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] === caracter) {
      cont++;
    }
  }
  return cont;
}

console.log(contarCaracteres("cadena para contar caracteres", " "));
