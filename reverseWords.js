const reversedWords = str => {
    const words = str.split(' ');
    let reversedStr = [];
    for (let i = words.length - 1; i >= 0; i--) {
        const element = words[i];
        reversedStr.push(element);
    }
    console.log(reversedStr.join(' '));

};
const myWords = 'I am a good developer';
reversedWords(myWords);