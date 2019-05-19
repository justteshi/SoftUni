function cook(input){
    let number = parseInt(input[0]);

    for (let i = 1; i < input.length; i++){

        if (input[i] === 'chop'){
            number /= 2;
            console.log(number);}
        if (input[i] === 'dice'){
            number = Math.sqrt(number);
            console.log(number)}
        if (input[i] === 'spice'){
            number += 1;
            console.log(number)}
        if (input[i] === 'bake'){
            number *= 3;
            console.log(number)}
        if (input[i] === 'fillet'){
            number = number - (number * 20 / 100);
            console.log(number)}
        
    }
}

cook(['9', 'dice', 'spice', 'chop', 'bake', 'fillet'])