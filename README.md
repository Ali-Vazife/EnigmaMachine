
# Enigma Machine Simulation

This project is a simple simulation of the Enigma machine, a historical encryption device used during World War II. The code is implemented in Node.js and consists of two main files: `rotateState.js` and `codeDecode.js`. The `rotateState.js` file contains the core functionality, including rotor initialization and encryption logic, while `codeDecode.js` serves as the entry point for encoding and decoding messages.

This project is a work in progress and currently represents a simplified version of the Enigma machine.


![Alt Text](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Enigma-action.svg/800px-Enigma-action.svg.png)

# History

The Enigma machine is a cipher device developed and used in the early- to mid-20th century to protect commercial, diplomatic, and military communication. It was employed extensively by Nazi Germany during World War II, in all branches of the German military. The Enigma machine was considered so secure that it was used to encipher the most top-secret messages.

![Alt Text](https://upload.wikimedia.org/wikipedia/commons/b/bd/Enigma_%28crittografia%29_-_Museo_scienza_e_tecnologia_Milano.jpg)


## reference:

- [wikipedia](https://en.wikipedia.org/wiki/Enigma_machine)


## Usage

1. **Run the Enigma Machine:**

```bash
node codeDecode.js code "word"
```

Replace "word" with the single word you want to encode or decode. The simulated Enigma machine will process the input, considering rotor settings and plugboard connections.


**To change daily rotors:**

```bash
node codeDecode.js changeRotors
```
