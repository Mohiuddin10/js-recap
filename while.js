// var num = [23, 21, 25, 27, 34, 41, 12];
// for (i = 0; i < num.length; i++) {
//         var number = num[i];
        
//         if (number >= 25) {
//                 continue;
//         }
//         console.log(number);
// }


for (i = 10; i >= 1; i--) {
        // console.log(i);
}

var marks = [75.25, 65, 80, 35.45, 99.50];
var mark = 0;
for (i = 0; i < marks.length; i++) {
        
        mark = mark + marks[i];
}
var avg = mark/marks.length;
var averade = avg.toFixed(2);
console.log(parseFloat(averade));

var saraNum = 119;
var saraOutput = saraNum % 5;
console.log(saraOutput);

var fruits = ['Apple', 'Banana', 'Orange'];
const indexBanana = fruits.indexOf('Banana');
console.log(indexBanana);
fruits[indexBanana] = 'Mango';
fruits.pop();
fruits.push('Watermelon');
console.log(fruits);