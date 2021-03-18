function esPar(N) {
  if (N === 0) {
    return true;
  } else if (N === 1) {
    return false;
  } else if (N < 0) {
    if (N === -1) {
      return false;
    } else {
      return esPar(N + 2);
    }
  } else {
    return esPar(N - 2);
  }
}

console.log(esPar(50));
console.log(esPar(75));
console.log(esPar(-2));
