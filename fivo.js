const fivo = [0, 1];
for ( let i = 2; i <= 15; i++){
    fivo[i] = fivo[i-1] + fivo[i -2];
}
console.log(fivo);