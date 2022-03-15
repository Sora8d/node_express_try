import crypto from 'crypto';

const encryptPass= (pass:string):string => {
    return crypto.createHash('sha256').update(pass).digest('hex')
};

export {encryptPass};