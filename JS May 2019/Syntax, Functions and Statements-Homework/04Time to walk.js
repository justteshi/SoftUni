function solve(steps,foodSize,speed){
    let walkedInMeters = steps * foodSize;
    let walkedInKm = walkedInMeters / 1000;

    let restMinutes = parseInt(walkedInMeters / 500);
    let totalSeconds = walkedInKm / speed *3600 + restMinutes * 60 ;
    let hoursWalked = parseInt(totalSeconds / 3600);
    totalSeconds -= hoursWalked * 3600;
    let minutesWalked = parseInt(totalSeconds / 60);
    let secondWalked = totalSeconds % 60 ;
    let finalOutput='';
    
    if (hoursWalked < 10) {
        finalOutput += `0${hoursWalked}`;
    }
    else {
        finalOutput += `${hoursWalked}`;
    }
    if (minutesWalked < 10) {
        finalOutput += `:0${minutesWalked}:`;
    }
    else {
        finalOutput += `:${minutesWalked}:`;
    }
    if (secondWalked < 10) {
        finalOutput += `0${secondWalked.toFixed(0)}`;
    }
    else {
        finalOutput += `${secondWalked.toFixed(0)}`;
    }

    console.log(finalOutput)

}
solve(4000, 0.60, 5)