const UserSchema = require("../DB/Schemas/UserSchema");

function checkUser(data, callback) {
  UserSchema.findOne({ email: data.email }, (err, data) => {
    if (data) {
      callback({
        status: 1,
      });
    } else {
      callback({
        status: 0,
      });
    }
  });
}

module.exports = checkUser;
