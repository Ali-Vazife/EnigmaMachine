const fs = require('fs').promises;
const { initializeRotorState } = require('./rotateState');

let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let plugboard = { 'a': 'b', 'c': 'd' };

async function readRotorState() {
  try {
    const data = await fs.readFile('./todays_rotor_state.enigma');
    const { r1, r2, r3 } = JSON.parse(data);
    console.log('Read rotor state:', { r1, r2, r3 });
    return { r1, r2, r3 };
  } catch (error) {
    console.error('Error reading rotor state:', error);
    console.log('Initializing rotor state...');
    return initializeRotorState();
  }
}

function reflector(char) {
  return alphabet[alphabet.length - alphabet.indexOf(char) - 1];
}

function enigmaOneChar(c, rotorState) {
  let { r1, r2, r3 } = rotorState;
  let c1 = r1[alphabet.indexOf(c)];
  let c2 = r2[alphabet.indexOf(c1)];
  let c3 = r3[alphabet.indexOf(c2)];
  let reflected = reflector(c3);
  c3 = alphabet[r3.indexOf(reflected)];
  c2 = alphabet[r2.indexOf(c3)];
  c1 = alphabet[r1.indexOf(c2)];

  return c1;
}

function code(argVal, rotorState) {
  const plain = argVal;
  let cipher = '';
  // let state = 0;

  for (let i = 0; i < plain.length; i++) {
    const c = plain[i];
    if (c in plugboard) {
      cipher += plugboard[c];
    } else {
      // state += 1;  // Increment state for each character processed
      cipher += enigmaOneChar(c, rotorState);
      // rotorState = rotateRotors(rotorState, state);
    }
  }
  console.log(cipher);
}

async function main() {
  let rotorState = await readRotorState();

  if (process.argv[2] === 'code' && process.argv[3]) {
    return code(process.argv[3], rotorState);
  }

  if (process.argv[2] === 'changeRotors') {
    initializeRotorState();
    console.log('New daily rotors:', rotorState);
  }
}

main();
