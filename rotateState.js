const fs = require('fs');

let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let alphabetArray = alphabet.split('');

function getRandomPermutation(array) {
  for (let i = 0; i < array.length; i++) {

    let j = Math.floor(Math.random() * array.length);

    if (i !== j) {
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  return array.join('');
}

function initializeRotorState() {
  let r1 = getRandomPermutation(alphabetArray);
  let r2 = getRandomPermutation(alphabetArray);
  let r3 = getRandomPermutation(alphabetArray);

  const rotorState = { r1, r2, r3 };
  const fileName = './todays_rotor_state.enigma';
  fs.writeFileSync(fileName, JSON.stringify(rotorState));
  console.log('Rotor configurations saved to:', fileName);

  return rotorState;
}

module.exports = {
  initializeRotorState
}