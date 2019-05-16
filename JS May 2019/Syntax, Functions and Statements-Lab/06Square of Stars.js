function drawSquare(param) {
    let size = Number(param);

    for(let i = 0; i < size; i++) {
        console.log('*'.repeat(size).split('').join(' '));
    }
}
drawSquare(5)