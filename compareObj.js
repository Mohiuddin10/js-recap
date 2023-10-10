// How to compare objects 
// 1. convert them to JSON.stringify and then compare 

const subject = [12, 13]
const subject1 = [12, 13]

const subjectStr = JSON.stringify(subject);
const subjectStr1 = JSON.stringify(subject1);

if (subjectStr === subjectStr1) {
    console.log('same');
}
else {
    console.log('not same');
}
