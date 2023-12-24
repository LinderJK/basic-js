const { NotImplementedError } = require('../extensions/index.js');

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
  isDirect = '';
  constructor(isDirect) {
    if (isDirect === true || undefined) {
      VigenereCipheringMachine.isDirect = 'direct ';
    }
    else if (isDirect === false) {
      VigenereCipheringMachine.isDirect = 'reverse';
    }
  }
  checkArgs(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
  }
  transformWord (message, key, ) {
    this.checkArgs(message, key);
  }
  encrypt(massage, key) {
    return this.transformWord(message, key, this.isDirect);
  }
  decrypt(encryptedMessage, key) {
    return this.transformWord(message, key, !this.isDirect);
  }
}

module.exports = {
  VigenereCipheringMachine
};
