// To Share a message with someone and also allow them to read it
//Encryption: we take text; scramble it up to create Cipher Text
//then provide a key to somebody to decrypt it

const { createCipheriv, randomBytes, createDecipheriv } = require('crypto');

/// Cipher

const message = 'i like turtles';
const key = randomBytes(32);
const iv = randomBytes(16);
//iv stands for initial vector;it prevents identical sequence of text
const cipher = createCipheriv('aes256', key, iv);
//Note:Encryption algorithms are different from hashing algorithms
//aes: Advanced Encryption Standard


/// Encrypt

const encryptedMessage = cipher.update(message, 'utf8', 'hex') + cipher.final('hex');
console.log(`Encrypted: ${encryptedMessage}`);
//Even id the key and message is same everytime the encrypted message will be different

/// Decrypt

const decipher = createDecipheriv('aes256', key, iv);
const decryptedMessage = decipher.update(encryptedMessage, 'hex', 'utf-8') + decipher.final('utf8');

console.log(`Deciphered: ${decryptedMessage.toString('utf-8')}`);

//PROBLEM: Both sender and receiver needs to share a password which is not practical