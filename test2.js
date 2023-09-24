function findAddress(obj) {
    let objValues = Object.values(obj);
    let objKeys = Object.keys(obj);
    if (objKeys.includes('society') && objKeys.includes('house')) {
        let newAddress = objValues.join(', ');
        return newAddress;
    }
    else if (objKeys.includes('society') == true && objKeys.includes('house') == false){
        let newAddress = objValues.join(',__, ');
        return newAddress;
    }
    else {
        objValues.push('__,__');
        let newAddress = objValues.join(', ');
        return newAddress;
    }
}

const address = {
    street: 12,
    
}
let mamaAddress = findAddress(address);
console.log(mamaAddress);