const UserSchema = require("../DB/Schemas/UserSchema");
const checkUser = require("../Controller/CheckUser");
const createUser = async (data, callback) => {
  if (data.email && data.password && data.fullName) {
    const user = new UserSchema({
      email: data.email,
      password: data.password,
      fullName: data.fullName,
    });

    checkUser(data, (userCheck) => {
      if (userCheck.status === 1) {
        callback({
          status: 1,
          message: "user already exists",
        });
      } else {
        user.save((error) => {
          if (error) {
            console.log(error);
            callback({
              status: -1,
              message: "error creating user",
            });
          } else {
            callback({
              status: 0,
              message: "user created sucessfully",
            });
          }
        });
      }
    });
  } else {
    callback({
      status: -2,
      message: "invalid user data",
    });
  }
};

module.exports = createUser;
