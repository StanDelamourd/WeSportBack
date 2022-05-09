const { authJwt } = require("../middleware");
const controller = require("../controller/user.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    app.get(
      "/api/test/user",
      [authJwt.verifyToken, authJwt.isUser],
      controller.userBoard
    );
    app.get(
      "/api/test/admin",
      [authJwt.verifyToken, authJwt.isAdmin],
      controller.adminBoard
    );
    next();
  });
};