//To validate whther the data came from the trusted party
//e.g. expecting a letter; it needs to be signed in blood and also sealed so
//that it is not tempered

//sender of the message uses private key to HASH the message
//private key is blood here and hash is seal
//the recipient uses public key to validate the authenticity of the message
const { createSign, createVerify } = require('crypto');
const { publicKey, privateKey } = require('./keypair');

const message = 'this data must be signed';

/// SIGN

const signer = createSign('rsa-sha256');

//rsa-sha256:rsa crypto system with sha hashing

signer.update(message);

const signature = signer.sign(privateKey, 'hex');


/// VERIFY

const verifier = createVerify('rsa-sha256');

verifier.update(message);

const isVerified = verifier.verify(publicKey, signature, 'hex');

console.log(`Verified: ${isVerified}`)

