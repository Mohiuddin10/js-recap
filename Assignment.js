function cubeNumber(number) {
    if (typeof(number) != 'number'){
        console.log('Please enter a valid number');
    }
    else {
        const cube = Math.pow(number,3);
        return cube;
    }
    
    
};
const num = cubeNumber(4);
console.log(num);


// done 1 

function matchFinder(string1, string2) {

}

function haveCommonSubstring(str1, str2) {
    const lowerStr1 = str1.toLowerCase();
    const lowerStr2 = str2.toLowerCase();
  
    for (let i = 0; i < lowerStr1.length; i++) {
      if (lowerStr1.includes(lowerStr2) == true) {
        return true; 
      }
    }
  
    return false; }


const strA = 'Jhon cina';
const strB = 'neta';
const test = haveCommonSubstring(strA, strB);
console.log(test);

// done 2 

function sortMaker(arr) {
  let largestNum = arr[0];
  let sortedNumber = [];
  for (i = 1; i < arr.length; i++){
      if (arr[i] < 0 || arr[i-1] < 0) {
        return 'Invalid input';
      }
      else if (arr[i] == arr[i-1]) {
        return 'Equal';
      }
      else if (arr[i] > arr[i-1]) {
          sortedNumber.push(arr[i], arr[i-1]);
      }
      else {
        sortedNumber.push(arr[i-1], arr[i]);
      }
  }
  return sortedNumber;
}

let nums = [43, 34];
const sortedNums = sortMaker(nums);
console.log(sortedNums);

// done 3 

function canPay(changeArray, totalDue) {
  if (changeArray.length == 0){
    return 'Please add your money';

  }
  else {
    let sum = 0;
  for (i = 0; i < changeArray.length; i++) {
    let element = changeArray[i];
    sum = sum + element;
    console.log(sum);
  }
  if (sum >= totalDue) {
    return true;
  }
  else {
    return false;
  }
  }

}

const moneyHave = [];
const price = 10;
console.log(canPay(moneyHave, price));

// done 5 

function findAddress(obj) {
  var objValues = Object.values(obj);
  var objKeys = Object.keys(obj);
  const isHouse = objKeys.includes('house');
  const isSocity = objKeys.includes('society')
  if (objKeys.length == 3 ){
    const newAddress = objValues.join(', ')
    console.log(newAddress);
  }
  else if (isHouse !== true){
    const newAddess = objValues.join(',__,');
    console.log(newAddess);
  }
  else if (isSocity !== true) {
    let society = '__'
    const addessArr = objValues.push(society);
    const newAddess = objValues.join(', ');
    console.log(newAddess);
  }
  else {
    objValues.push(',__,__');
    console.log(objValues);
  }
  
  
}

const add = {
  street:10,
  house: '12A',
  society: 'mama miya'
  };


console.log(findAddress(add));