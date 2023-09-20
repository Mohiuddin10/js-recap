const findLeapYear = year => {
    const isLeapYear = year % 4;
    if (isLeapYear === 0) {
        console.log('Your year is Leap Year: ', year);
    }
    else {
        console.log('Your year is not leap year: ', year);
    }
}

findLeapYear(1992);