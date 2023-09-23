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
      if (lowerStr2.includes(lowerStr1.charAt(i))) {
        return true; // Found a common character, so return true
      }
    }
  
    return false; // No common substring found
  }


const strA = 'Jhon cina';
const strB = 'jd';
console.log(haveCommonSubstring(strA, strB));;