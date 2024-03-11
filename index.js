// index.js
const authentication = {
    jwt: require('./jwt'),
    mfa: require('./mfa'),
    oauth: require('./oauth'),
    password: require('./password'),
    user: require('./user'),
  };
  
  module.exports = authentication;
  