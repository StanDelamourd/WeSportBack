const { verifySignUp } = require("../middleware/authJwt");
const controller = require("../controller/auth.controller");
const UserRouterClass = require('../router/auth.router');
const userRouter = new UserRouterClass();
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept");
    app.post("/api/auth/signup",
    // [
    //   verifySignUp.checkDuplicatePseudoOrEmail(req),
    //   verifySignUp.checkRolesExisted
    // ],
    controller.signup,
  );
  app.post("/api/auth/signin", controller.signin);
    next();
  });
  
// app.use('/auth', userRouter.init());

};
