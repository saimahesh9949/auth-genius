// oauth.js
const oauth = {
    google: require('./google'),
    facebook: require('./facebook'),
    github: require('./github')
  };
  
  module.exports = oauth;
  