function solve(input){
    let towns = {};
    for(town of input){
        let townTemp = town.split(' <-> ');
        let currTown = townTemp[0];
        let population = +townTemp[1];

        if (!towns[currTown]){
            towns[currTown] = 0;
        }
        towns[currTown]+= population;
    }

    for(const property of towns){
        console.log(`${property} : ${towns[property]}`)
    }

}
