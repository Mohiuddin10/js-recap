const factorialNumber = number => {
    let result = 1;
    for (i = number; i >= 1; i--) {
        result = result * i;
    }
    return result;
}


var number9 = factorialNumber(5);
console.log(number9);