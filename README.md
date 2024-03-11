# AuthGenius

AuthGenius is a Node.js package that provides a secure and customizable authentication system for your applications. It includes features such as multi-factor authentication (MFA), password policies, OAuth support, user management, and JSON Web Token (JWT) handling.

## Installation

To install AuthGenius, use npm:

```bash
npm i authgenius


Usage

// Import the AuthGenius package
const AuthGenius = require('auth-genius');

// Use the authentication modules
const { mfa, password, oauth, user, jwt } = AuthGenius;

// Example usage of MFA
const totpToken = mfa.totp.generateToken('secret');
console.log('TOTP Token:', totpToken);

// Example usage of Password Policies
const isStrongPassword = password.policies.isStrong('P@ssw0rd');
console.log('Is Strong Password:', isStrongPassword);

// Example usage of OAuth
const googleAuthUrl = oauth.google.getAuthUrl();
console.log('Google Auth URL:', googleAuthUrl);

// Example usage of User management
const registeredUser = user.register('user@example.com', 'P@ssw0rd');
console.log('Registered User:', registeredUser);

// Example usage of JWT
const token = jwt.generate({ userId: '123', role: 'admin' }, 'secret');
console.log('Generated Token:', token);


To run tests, use the following command:
npm test
