// mfa.js
const mfa = {
    totp: require('./totp'),
    sms: require('./sms')
  };
  
  module.exports = mfa;
  