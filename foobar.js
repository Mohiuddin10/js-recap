const foobar = num => {
    for (i = 0; i <= num; i++){
        if (i%3 == 0 && i%5 == 0){
            console.log('foobar');
        }
        else if (i%3 == 0){
            console.log('foo');
        }
        else if (i%5 == 0) {
            console.log('bar');
        }
        else {
            console.log(i);
        }
    }
}
foobar(50);