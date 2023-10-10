const counter = () => {
    let count = 0;
    return () => {
        count++;
        return count;
    }
}

const start = counter();
console.log(start());
console.log(start());
console.log(start());
console.log(start());


