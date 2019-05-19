function solve(input){
    let obj = {};

    for(let i= 0; i < input.length;i+=2){
        let key = input[i];
        let value = +input[i + 1];
        obj[key] = value;
    }
    console.log(obj);
}
solve(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]);