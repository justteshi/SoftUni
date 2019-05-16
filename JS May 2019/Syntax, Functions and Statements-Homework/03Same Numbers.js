function solve(number){
    let isSame = true;
    let sum = Number(0);

    for(let i = 0; i < number.toString().length; i++){
        sum += +number.toString()[i];

        if(number.toString()[0] == number.toString()[i] && isSame){
            isSame = true;
        }
        else{
            isSame =false;
        }
    }

    console.log(isSame);
    console.log(sum);

}
solve(222222)