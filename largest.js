const numbers = [12,13,14,15,20];

const largestNumber = num => {
    let largestNum = num[0];
    for (i = 0; i < num.length; i++){
        const element = num[i];
        if (element > largestNum) {
            largestNum = element;
        }
    }
    return largestNum;
}

const larNumArr = largestNumber(numbers);
console.log(larNumArr);