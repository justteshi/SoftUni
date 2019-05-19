function print(input){

    let regex = /\s*\|\s*/;
    let towns = [];

    for(let i = 1; i < input.length; i++){
        let currTown = {};
        let string = input[i].split(regex).filter(x => x);
        currTown['Town'] = string[0];
        currTown['Latitude'] = Number(string[1]);
        currTown['Longitude'] = Number(string[2]);

        towns.push(currTown);
    };

    let JSONt = JSON.stringify(towns);
    console.log(JSONt);
}

print(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'])