import bcrypt from 'bcrypt';

export const hashPassword = async (password) => {
    try {
        const saltRounds = 12;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        console.log(error);
        throw new Error('Error hashing password');
    }
};

export const comparePassword = async (password, hashedPassword) => {
    try {
        return await bcrypt.compare(password, hashedPassword);
    } catch (error) {
        console.log(error);
        throw new Error('Error comparing password');
    }
};


// Hashing: The password is hashed before storage to protect it.
// Comparison: The provided plaintext password is hashed and compared with the stored hash to verify the password without ever exposing the plaintext password.
//while waiting to bcrypt.hash other part of the code can continue its excection