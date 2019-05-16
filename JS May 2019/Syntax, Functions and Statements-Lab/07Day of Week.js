function printDay(arr) {
    let week = {
        'Monday': 1,
        'Tuesday': 2,
        'Wednesday': 3,
        'Thursday': 4,
        'Friday': 5,
        'Saturday': 6,
        'Sunday': 7
    };

    for(const key in week) {
        if(key == arr) {
            console.log(week[key]);
            return;
        }
    }
    console.log('error');
    return;
}

printDay("Monday");
