const laptops = [
    {name: 'lenovo', price: 42000},
    {name: 'MSI', price: 62000},
    {name: 'HP', price: 22000},
    {name: 'ASUS', price: 37000},
    {name: 'MacBook', price: 142000}
];

const cheapestLaptop = laptops => {
    let cheapestLap = laptops[0];
    for (let i = 0; i < laptops.length; i++){
        if (laptops[i].price < cheapestLap.price) {
            cheapestLap = laptops[i];
        }
    }
    return cheapestLap;
}

const lowPriceLaptop = cheapestLaptop(laptops);
console.log(lowPriceLaptop);

const totalPrice = laptops => {
    let sum = 0;
    for ( let i = 0; i < laptops.length; i++) {
        sum = sum + laptops[i].price;
    }
    return sum;
}

const totalLaptopsPrice = totalPrice(laptops);
console.log(totalLaptopsPrice);