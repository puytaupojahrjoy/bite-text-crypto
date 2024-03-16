// textCryptoUtils.js
const bcrypt = require('bcrypt');
const crypto = require('crypto');

const hashPassword = async (password) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.error('Error hashing password:', error);
    throw new Error('Failed to hash password');
  }
};

const comparePasswords = async (password, hashedPassword) => {
  try {
    const match = await bcrypt.compare(password, hashedPassword);
    return match;
  } catch (error) {
    console.error('Error comparing passwords:', error);
    throw new Error('Failed to compare passwords');
  }
};

const generateRandomToken = (length = 16) => {
  try {
    return crypto.randomBytes(length).toString('hex');
  } catch (error) {
    console.error('Error generating random token:', error);
    throw new Error('Failed to generate random token');
  }
};

module.exports = {
  hashPassword,
  comparePasswords,
  generateRandomToken,
};
