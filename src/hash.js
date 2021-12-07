const { createHash } = require('crypto');

// Create a string hash

function hash(input) {
    //sha: Secure Hashing ALgorithm  : Returns a Hashed value 
    //which is also called a DIGEST with 256 bits

    //another algorithm is md5 (has become obsolete now)

    //evene better algorithm is Argon2
    return createHash('sha256').update(input).digest('base64');

    //base64 : Format in which we want hashed password; another option is 'hex'
}

// Compare two hashed passwords

let password = 'hi-mom!';
const hash1 = hash(password);
console.log(hash1)

/// ... some time later

password = 'hi-mom!';
const hash2 = hash(password);
const match = hash1 === hash2;

console.log(match ? '✔️  good password' : '❌  password does not match');


//PROBLEM: Hashing function always return the same value

// Hackers if have access to database then they can go to something
// called rainbow table which has hashes(pre computed hashes) for something
// common passwords
 