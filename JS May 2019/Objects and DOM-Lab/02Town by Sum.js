function print(input){
    
    let townsSums = {};
    

    for(let i = 0; i < input.length; i+=2){
        let town = input[i];
        let currSum =parseInt(input[i + 1]);

        if(!townsSums[town]){
            townsSums[town] = 0;
        }

        townsSums[town] += currSum;
    }
        let Json = JSON.stringify(townsSums);
        console.log(Json);
}

print('')