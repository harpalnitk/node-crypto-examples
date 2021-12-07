//hmac: Hash Based Message Authentication Code
//Hash that also requires a password
//Example is JSONWebToken used to communicate to and fro between client and server
const { createHmac } = require('crypto');

const key = 'super-secret!';
const message = 'boo 👻';

const hmac = createHmac('sha256', key).update(message).digest('hex');

console.log(hmac);

//if different password is used Hash will be different
const key2 = 'other-password';
const hmac2 = createHmac('sha256', key2).update(message).digest('hex');

console.log(hmac2);
