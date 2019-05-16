function solve(input) {
    
    let sum = Number(0);
    let inverted = Number(0);
    let concat = '';

    for (let element of input) {
        sum += element;
        inverted += 1 / element;
        concat += element;
    }
    console.log(sum);
    console.log(inverted);
    console.log(concat)
}

solve([2,4,8,16])