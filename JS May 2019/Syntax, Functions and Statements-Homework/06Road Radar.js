function solve (input){
    let speed = parseInt(input[0]);
    let speedArea = input[1];

    switch(speedArea){
        case 'city': 
            let allowedCitySpeed = 50;
            if(speed > allowedCitySpeed){
                let overTheLimit = speed - allowedCitySpeed;

                if(overTheLimit <= 20){
                console.log('speeding');
                }
                else if (overTheLimit <= 40) {
                console.log('excessive speeding');
                }
                else{
                console.log('reckless driving');
                }
            }
            break;

        case 'residential':
            let allowedResidentialSpeed = 20;
            if(speed > allowedResidentialSpeed){
                let overTheLimit = speed - allowedResidentialSpeed;
    
                if(overTheLimit <= 20){
                    console.log('speeding');
                }
                else if (overTheLimit <= 40) {
                    console.log('excessive speeding');
                }
                else{
                    console.log('reckless driving');
                }
            }
            break;

        case 'interstate':
                let allowedInterstateSpeed = 90;
                if(speed > allowedInterstateSpeed){
                    let overTheLimit = speed - allowedInterstateSpeed;
        
                    if(overTheLimit <= 20){
                        console.log('speeding');
                    }
                    else if (overTheLimit <= 40) {
                        console.log('excessive speeding');
                    }
                    else{
                        console.log('reckless driving');
                    }
                }
                break;
        case 'motorway':
                let alowedMotorwaySpeed = 130;
                if(speed > alowedMotorwaySpeed){
                    let overTheLimit = speed - alowedMotorwaySpeed;
        
                    if(overTheLimit <= 20){
                        console.log('speeding');
                    }
                    else if (overTheLimit <= 40) {
                        console.log('excessive speeding');
                    }
                    else{
                        console.log('reckless driving');
                    }
                }break;                


    }
}

solve ([200,'motorway'])