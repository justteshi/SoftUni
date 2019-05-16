function calculate(firstNumber,secondNumber, operator) {
    let num1 = Number(firstNumber);
    let num2 = Number(secondNumber);

    let add = num1 + num2;
    let substract = num1 - num2;
    let multiply = num1 * num2;
    let divide = num1 / num2;

    switch(operator) {
        case '+': return add;
        case '-': return substract;
        case '*': return multiply;
        case '/': return divide;
    }


}