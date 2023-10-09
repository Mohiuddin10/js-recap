class Player  {
    constructor(name, age, weight) {
        this.name = name;
        this.age = age;
        this.weight = weight;
    }
    msg(){
        console.log(`Hello our new player is ${this.name}, his age is ${this.age}, weight is ${this.weight}`);
    }
}

const player1 = new Player('rakib', 25, 58);
console.log(player1);
player1.msg('rakin', 27, 55);

console.log(player1['weight']);