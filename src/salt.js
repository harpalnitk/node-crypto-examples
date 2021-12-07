// A salt is a random value which is added to the hash
//therefore making it much harder to guess
const { scryptSync, randomBytes, timingSafeEqual } = require('crypto');

let users = [];
function signup(email, password) {
    //generate salt: here random set of hex characters
    const salt = randomBytes(16).toString('hex');
    console.log(`Salt: ${salt}`)
    //64 is keylength and is recommended value
    const hashedPassword = scryptSync(password, salt, 64).toString('hex');

    const user = { email, password: `${salt}:${hashedPassword}` }
    console.log(`Signed up User: ${JSON.stringify(user)}`)
  
    users.push(user);

    return user
}

function login(email, password) {
    const user = users.find(v => v.email === email);
  
    const [salt, key] = user.password.split(':');
    const hashedBuffer = scryptSync(password, salt, 64);
  
    const keyBuffer = Buffer.from(key, 'hex');
    //timingSafeEqual prevents timing atatcks from hackers
    //where hackers compute the amount of time it
    //takes to perform a function
    const match = timingSafeEqual(hashedBuffer, keyBuffer);

    console.log(`Match: ${match}`)
    
    if (match) {
        return 'login success!'
    } else {
        return 'login fail!'
    }
}

signup('harpal@gmail.com','harpal123');
login('harpal@gmail.com','harpal123');


