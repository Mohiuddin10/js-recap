const products = [
    {id: 1, name: 'iphone', price: 120000},
    {id: 2, name: 'Xaiomi phone', price: 120000},
    {id: 3, name: 'laptop', price: 120000},
    {id: 4, name: 'One plus', price: 120000},
    {id: 5, name: 'vivo phone', price: 120000},
    {id: 6, name: 'car', price: 120000},
];

const findPhone = (items, searchItem) =>{
    const matchItems = [];
    for (const item of items) {
        if (item.name.toLowerCase().includes(searchItem.toLowerCase())){
            matchItems.push(item);
        };
    }
    return matchItems;
}

const phn = findPhone(products, 'phone');
console.log(phn);