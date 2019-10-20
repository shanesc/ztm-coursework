const fs = require('fs');

// What floor does Santa end up on?
function question1() {
  fs.readFile('./instructions.txt', (err, data) => {
    console.time('challenge1');

    const str = data.toString();
    const directionsArray = str.split('');
    const floor = directionsArray.reduce((acc, currVal) => {
      if (currVal === '(') {
        return acc += 1;
      } else if (currVal === ')') {
        return acc -= 1;
      }
    }, 0)
    console.log('Final floor: ', floor);
    console.timeEnd('challenge1');
  });
}
question1();
// When does Santa first enter the basement?

function question2() {
  fs.readFile('./instructions.txt', (err, data) => {
    console.time('challenge2');

    const str = data.toString();
    const directionsArray = str.split('');
    let accumulator = 0;
    let directionCounter = 0;
    const floor = directionsArray.some((currentValue) => {
      if (currentValue === '(') {
         accumulator += 1;
      } else if (currentValue === ')') {
         accumulator -= 1;
      }
      directionCounter++;
      return (accumulator < 0);
    })
    console.log('Position in Basement: ', directionCounter);
    console.timeEnd('challenge2');
  });
}

question2();