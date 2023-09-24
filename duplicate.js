const frndName = ['rocy', 'mama', 'roxy', 'roxy', 'roxy', 'bappi', 'roxy'];


const removeDup = names => {
    const uniqueNames = [];
    for (let i = 0; i < names.length; i++) {
        const element = names[i];
        if (uniqueNames.includes(element) !== true){
            uniqueNames.push(element);
        }
        else {
            
        }
    }
    return uniqueNames;
}

console.log(removeDup(frndName));