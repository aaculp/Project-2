const bcrypt = require('bcryptjs');
const User = require('../../model/user');

function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}
