const fs = require('fs');

fs.readFile('./instructions.txt', (err, data) => {
  console.time('challenge');
  if (err) {
    console.log('Error');
  }

  const str = data.toString();
  let floor = 0;
  for (let i = 0; i < str.length; i++) {
    ((str[i] === '(') ? floor++ : floor--);
    if (floor === -1) {
      console.log('Position in Basement: ', i+1);
    }
  }
  console.log('Final floor: ', floor);
  console.timeEnd('challenge');
});

