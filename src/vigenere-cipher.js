const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.type = type;
  }
  encrypt(message, key) {
    if (!message || !key || typeof message !== 'string' || typeof key !== 'string') throw new Error ("Incorrect arguments!");
    let newMessage = message.toUpperCase().split(' ').join('');
    let newKey = key.toUpperCase();
    let result = '';
    let finalResult = '';
    for(;newMessage.length > newKey.length;) 
    newKey+=newKey

    for (let i = 0; i < newMessage.length; i++) {
      let newAlphabet = [...this.alphabet].slice('')
      let codeAlphabet = newAlphabet.concat(newAlphabet.splice(0, newAlphabet.indexOf(newKey[i]))).join('');

      if (this.alphabet.includes(newMessage[i])) result += codeAlphabet[this.alphabet.indexOf(newMessage[i])]
      else result += newMessage[i]
    }
    
    let reverseMessage = result.split('').reverse();

    for (let i = 0; i < message.length; i++) {
      if (message[i] != ' ') finalResult += reverseMessage.pop()
      else finalResult += ' '
    }

    if (this.type) {
      return finalResult
    } else {
      return finalResult.split('').reverse().join('')
    }
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key || typeof encryptedMessage !== 'string' || typeof key !== 'string') throw new Error ("Incorrect arguments!");
    let newEncryptedMessage = encryptedMessage.toUpperCase().split(' ').join('')
    let newKey = key.toUpperCase()
    let res = ''
    let result = '';
    for(;newEncryptedMessage.length > newKey.length;) newKey+=newKey

    for (let i = 0; i < newEncryptedMessage.length; i++) {
      let newAlphabet = [...this.alphabet].slice('')
      let codeAlphabet = newAlphabet.concat(newAlphabet.splice(0, newAlphabet.indexOf(newKey[i]))).join('');
      if (this.alphabet.includes(newEncryptedMessage[i])) res += this.alphabet[codeAlphabet.indexOf(newEncryptedMessage[i])]
      else res += newEncryptedMessage[i]
    }
    
    let reverseEncryptedMessage = res.split('').reverse();

    for (let i = 0; i < encryptedMessage.length; i++) {
      if (encryptedMessage[i] != ' ') result += reverseEncryptedMessage.pop()
      else result += ' '
    }
    
    if (this.type) {
      return result
    } else {
      return result.split('').reverse().join('')
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};