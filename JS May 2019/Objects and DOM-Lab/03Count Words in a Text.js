function solve(input){

    let arr = input.split(' ');
    let wordsCount = {};

    for(const word of arr){
        if(!wordsCount[word]){
            wordsCount[word] = 0;
        }
        wordsCount[word]++
    }
    let Json = JSON.stringify(wordsCount)
    console.log(Json)
}

solve('This is fucking shit shit and fucking shit did i said fucking shit alot fucking times.')