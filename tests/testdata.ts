export const loginData = {
  username: 'standard_user',
  password: 'secret_sauce',
  invalidUsername: 'invalid_user',
  invalidPassword: 'invalid_password'
};

export const invalidUsernames = [
  '',
  'invalid_user',
  'INVALID_USER',
  ' standard_user',
  'standard_user ',
  'standard user',
  'standard-user',
  'standard_user123',
  'locked_out_user',
  'admin',
  'test@example.com',
  '123456',
  '!@#$%^&*'
];

export const invalidPasswords = [
  '',
  'invalid_password',
  'SECRET_SAUCE',
  ' secret_sauce',
  'secret_sauce ',
  'secret sauce',
  'secret-sauce',
  'Secret_sauce',
  '123456',
  'password',
  '!@#$%^&*'
];

export const negativeLoginCases = [
  {
    caseName: 'empty username and password',
    username: '',
    password: ''
  },
  {
    caseName: 'empty username',
    username: '',
    password: loginData.password
  },
  {
    caseName: 'empty password',
    username: loginData.username,
    password: ''
  },
  {
    caseName: 'invalid username with valid password',
    username: loginData.invalidUsername,
    password: loginData.password
  },
  {
    caseName: 'valid username with invalid password',
    username: loginData.username,
    password: loginData.invalidPassword
  },
  {
    caseName: 'invalid username and invalid password',
    username: loginData.invalidUsername,
    password: loginData.invalidPassword
  },
  {
    caseName: 'uppercase username',
    username: 'STANDARD_USER',
    password: loginData.password
  },
  {
    caseName: 'uppercase password',
    username: loginData.username,
    password: 'SECRET_SAUCE'
  },
  {
    caseName: 'username with leading space',
    username: ' standard_user',
    password: loginData.password
  },
  {
    caseName: 'username with trailing space',
    username: 'standard_user ',
    password: loginData.password
  },
  {
    caseName: 'password with leading space',
    username: loginData.username,
    password: ' secret_sauce'
  },
  {
    caseName: 'password with trailing space',
    username: loginData.username,
    password: 'secret_sauce '
  },
  {
    caseName: 'username with special characters',
    username: '!@#$%^&*',
    password: loginData.password
  },
  {
    caseName: 'password with special characters',
    username: loginData.username,
    password: '!@#$%^&*'
  },
  {
    caseName: 'numeric username',
    username: '123456',
    password: loginData.password
  },
  {
    caseName: 'numeric password',
    username: loginData.username,
    password: '123456'
  },
  {
    caseName: 'email style username',
    username: 'test@example.com',
    password: loginData.password
  },
  {
    caseName: 'SQL injection style input',
    username: "' OR '1'='1",
    password: "' OR '1'='1"
  },
  {
    caseName: 'script injection style input',
    username: '<script>alert(1)</script>',
    password: '<script>alert(1)</script>'
  },
  {
    caseName: 'locked out username with valid password',
    username: 'locked_out_user',
    password: loginData.password
  }
];
