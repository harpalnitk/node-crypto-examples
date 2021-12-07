//encrypt with public key
//decrypt with private key

//when you visit a secure website(https); the browser will find
//the public key in the SSL certificate and use it to send messages to the server
//this prevents hackers to get acces to the data
//Data is then decrypted by the private key on the server
const {  publicEncrypt, privateDecrypt } = require('crypto');
const { publicKey, privateKey } = require('./keypair');

const message = 'the british are coming!'

const encryptedData = publicEncrypt(
    publicKey,
    Buffer.from(message)
  );
  //the message needs to be in buffer format


console.log(encryptedData.toString('hex'))


const decryptedData = privateDecrypt(
    privateKey,
    encryptedData
);

console.log(decryptedData.toString('utf-8'));