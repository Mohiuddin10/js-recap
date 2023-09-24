function cubeNumber(number) {
    if (typeof (number) != 'number') {
        return 'Please enter a valid number';
    }
    else {
        const result = Math.pow(number, 3);
        return result;
    }
};





function matchFinder(string1, string2) {
    if (typeof (string1) == 'string' && typeof (string2) == 'string') {
        for (let i = 0; i < string1.length; i++) {
            if (string1.includes(string2)) {
                return true;
            }
        }
        return false;
    }
    else {
        return 'Please enter valid text';
    }

};





function sortMaker(arr) {
    let largestNum = arr[0];
    let sortedNumber = [];
    for (i = 1; i < arr.length; i++) {
        if (arr[i] < 0 || arr[i - 1] < 0) {
            return 'Invalid Input';
        }
        else if (arr[i] == arr[i - 1]) {
            return 'equal';
        }
        else if (arr[i] > arr[i - 1]) {
            sortedNumber.push(arr[i], arr[i - 1]);
        }
        else {
            sortedNumber.push(arr[i - 1], arr[i]);
        }
    }
    return sortedNumber;
};




function findAddress(obj) {
    var objValues = Object.values(obj);
    var objKeys = Object.keys(obj);
    const isHouse = objKeys.includes('house');
    const isSociety = objKeys.includes('society')
    if (objKeys.length == 3) {
        const output = objValues.join(', ')
        return output;
    }
    else if (isHouse !== true && isSociety !== true) {
        objValues.push('__,__');
        const output = objValues.join(',');
        return output;
    }
    else if (isHouse !== true) {
        const output = objValues.join(',__,');
        return output;
    }
    else if (isSociety !== true) {
        let society = '__'
        objValues.push(society);
        const output = objValues.join(', ');
        return output;
    }
}





function canPay(changeArray, totalDue) {
    if (changeArray.length == 0) {
        return 'Please add your money';
    }
    else {
        let sum = 0;
        for (i = 0; i < changeArray.length; i++) {
            sum = sum + changeArray[i];
        }
        if (sum >= totalDue) {
            return true;
        }
        else {
            return false;
        }
    }
};