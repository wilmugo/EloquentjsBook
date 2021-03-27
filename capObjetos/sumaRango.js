function rango(inicio, final) {
  let numeros = [];
  for (let i = inicio; i <= final; i++) {
    numeros.push(i);
  }
  return numeros;
}

// console.log(rango(6, 15));

function suma(...arreglo) {
  let add = 0;
  for (const num of arreglo) {
    add += num;
  }
  return add;
}

//console.log(suma(rango(1, 10)));

////////
//  en la funcion rango_opc falta validar que inicio sea menor que final  //
////////

function rango_opc(inicio, final, opcional) {
  let numeros = [];

  if (opcional != undefined) {
    if (opcional > 0) {
      for (let i = inicio; i <= final; i += opcional) {
        numeros.push(i);
      }
      return numeros;
    } else if (opcional < 0) {
      opcional = -opcional;
      for (let i = final; i >= inicio; i -= opcional) {
        numeros.push(i);
      }
      return numeros;
    } else {
      console.log("la opcion es incorrecta");
    }
  } else {
    numeros = rango(inicio, final);
    return numeros;
  }
}

console.log(rango_opc(1, 10, -1));
