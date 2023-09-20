var shoppingCart = {
    keyboard: 12,
    mouse: 5,
    monitor: 2,
    headphone: 2
}

const newObj = Object.entries(shoppingCart);

// console.log(newObj);

for (let item in shoppingCart) {
    const itemUnit = shoppingCart[item];
    console.log(item, ' : ', itemUnit);
}

function add (num1, num2){
    console.log('wiiiw');
}
var nameTada = add(10,20);
console.log(nameTada);
