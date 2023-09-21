let sum = 0;
const addArray = numbers => {
    for (let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        sum = element + sum;
    }
    return sum;
    

};

const myNum = [12, 13, 14, 15, 16];
const sumMyNum = addArray(myNum);
// console.log(sumMyNum);

// ====>>>>> get odd numbers from an arrary 
let oddNumbers = [];
let evenNumbers = [];
const getOddNumber = numbers => {
    for (i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element % 2 !== 0) {
            oddNumbers.push(element);
        }
        else {
            evenNumbers.push(element);
        }
    }
    return oddNumbers;
}

console.log(getOddNumber(myNum));
console.log(evenNumbers);