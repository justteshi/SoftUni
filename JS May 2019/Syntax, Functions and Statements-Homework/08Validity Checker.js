function solve(inputCoordinatesArray) {
    let x1 = +inputCoordinatesArray[0];
    let y1 = +inputCoordinatesArray[1];
    let x2 = +inputCoordinatesArray[2];
    let y2 = +inputCoordinatesArray[3];

    function validatePoints(x1, y1, x2, y2) {
        firstSide = Math.abs(x1-x2);
        secondSide = Math.abs(y1-y2);
        if (Math.sqrt(Math.pow(firstSide, 2) + Math.pow(secondSide, 2)) % 1 === 0) {
            return 'valid';
        } else {
            return 'invalid';
        }
    }

    console.log(`{${x1}, ${y1}} to {0, 0} is ${validatePoints(x1,y1,0,0)}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${validatePoints(x2,y2,0,0)}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${validatePoints(x1,y1,x2,y2)}`);
}