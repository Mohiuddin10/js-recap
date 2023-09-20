var shoppingCart = {
    keyboard: 12,
    mouse: 5,
    monitor: 2,
    headphone: 2
}


// var keyboard = shoppingCart.keyboard;


// var keyboard = shoppingCart['mouse']

var indur = 'headphone';
shoppingCart.indur = 4;
var mousE = shoppingCart[indur];
// console.log(mousE);

var objProperties = Object.keys(shoppingCart);
var objValues = Object.values(shoppingCart);
// console.log(objValues, objValues.length);
// console.log(objProperties ,objProperties.length);

var propertyName = 'mouse';
var propertyValue = shoppingCart[propertyName];
console.log(propertyName, propertyValue);

shoppingCart[propertyName] = 12;
console.log(shoppingCart);