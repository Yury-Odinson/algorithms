const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function noOdds(values) {
    const result = [];
    values.forEach(e => {
        if (e % 2 === 0) {
            result.push(e);
        }
    });
    return result;
}

function noOdds2(values) {
    return values.filter(n => n % 2 === 0);
}


console.log(noOdds(arr));
console.log(noOdds2(arr));
