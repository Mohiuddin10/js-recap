const reverseStr = str => {
    let reversed = '';
    for (i = str.length-1; i >= 0; i--){
        const element = str[i];
        reversed = reversed + element;
    }
    console.log(reversed);
}

const myStr = 'I am a good developer';
const reversString = reverseStr(myStr);
