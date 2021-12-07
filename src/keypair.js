//Consider it like a mailbox
//Anyone with public key can deposit a mail
//but only the one with private key can open the mailbox
const { generateKeyPairSync } = require('crypto');

//rsa is the crypto system: Rivest-Shamir-Adleman
const { privateKey, publicKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048, // the length of your key in bits
  publicKeyEncoding: {
    type: 'spki', // recommended to be 'spki' by the Node.js docs
    format: 'pem', //privacy enhanced mail: shows us keys in base64 format
  },
  privateKeyEncoding: {
    type: 'pkcs8', // recommended to be 'pkcs8' by the Node.js docs
    format: 'pem',
    // cipher: 'aes-256-cbc',
    // passphrase: 'top secret'
  },
});
//passphrade can be added for additional security

console.log(publicKey);
console.log(privateKey);

module.exports = {
    privateKey, publicKey
}

