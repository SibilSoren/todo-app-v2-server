const createUserModel = require("../Models/CreateUserModel");

function createUserController(req, res) {
  console.log(req.body);
  createUserModel(req.body, (insertCallback) => {
    if (insertCallback.status == 1) {
      res.send({
        status: insertCallback.status,
        message: insertCallback.message,
      });
    } else {
      res.send({
        status: insertCallback.status,
        message: insertCallback.message,
      });
    }
  });
}

module.exports = createUserController;
