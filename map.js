const number = [ 12, 13, 23, 24, 25 ];
const double = number.map(num => num * 2);
console.log(double);

const friends = [ 'roxy', 'tousif', 'saiful', 'bappi'];
const firstLetter = friends.map(friend => friend[0]);
console.log(firstLetter);

const friendLength = friends.map(friend => friend.length);
console.log(friendLength);


const doubleForEach = number.forEach(n => console.log(n*2));
console.log(doubleForEach);

const playerWeight = [ 48, 55, 53, 60, 70, 75, 80];
const selectedPlayer = playerWeight.filter(p => p > 50);
console.log(selectedPlayer);
const rejectedPlayer = playerWeight.filter(p => p <= 55 || p >= 70);
console.log(rejectedPlayer);

// find only return the first element which fulfill the condition 
const seletedFindPlayer = playerWeight.find(p => p > 50);
console.log(seletedFindPlayer);