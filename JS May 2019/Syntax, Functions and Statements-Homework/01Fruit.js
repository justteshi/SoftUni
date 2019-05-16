function solve(arr1, arr2, arr3){
    let fruit = arr1;
    let kilosToBuy = arr2 / 1000;
    let pricePerKilo = arr3;
    let price = kilosToBuy * pricePerKilo;

    console.log(`I need $${price.toFixed(2)} to buy ${kilosToBuy.toFixed(2)} kilograms ${fruit}.`)
}

solve('orange', 2500, 1.80)