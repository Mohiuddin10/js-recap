class Car{
    constructor( name, price){
        this.name = name;
        this.price = price;
    }
}

class Bus extends Car{
    constructor(name, price, seat, ticketPrice){
        super(name, price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }
}

const voxy = new Car('voxy', 1200000);
console.log(voxy);

const tataBus = new Bus('tata', 2500000, 25, 120);
console.log(tataBus);