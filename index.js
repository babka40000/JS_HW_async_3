const readline = require('node:readline/promises').createInterface({
    input: process.stdin,
    output: process.stdout
})

async function rl(correctNum, counter) {
    let num = 0;

    do {
        counter++;
        num = await readline.question(`Угадай число от 1 до 10 `);
        if (num < correctNum) {
            console.log('Больше!');
        } else if (num > correctNum) {
            console.log('Меньше!');    
        }
    } while (num != correctNum);

    console.log('Вы угадали!');
    console.log('Число попыток: ' + counter);  
    readline.close();
}

correctNum = Math.floor(Math.random() * 10);
counter = 0;

rl(correctNum, counter);