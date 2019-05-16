function solve(arr) {
    let result;
    let arrgumentType = typeof(arr);

    if(arrgumentType === 'number') {
        result = Math.pow(arr, 2) * Math.PI;
        console.log(result.toFixed(2));
    }
    else {
        console.log(`We can not calculate the circle area, because we receive a ${arrgumentType}.`)
    }
}

//solve(5)
//solve([1,2])