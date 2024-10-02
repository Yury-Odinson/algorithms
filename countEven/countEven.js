function countEven(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        // массив числа num[i] (15 => ["1", "5"])
        let x = i.toString().split("");
        // число, которое хранит сумму цифр num[i] (["1", "5"] => 6)
        let y = 0;
        x.forEach(e => {
            y += Number(e);
        });
        if (y % 2 === 0) {
            count++;
        }
    }
    return count;
}
console.log(countEven(30));
