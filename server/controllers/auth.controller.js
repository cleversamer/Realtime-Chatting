const { authService } = require("../services");
const httpStatus = require("http-status");

module.exports.register = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await authService.createUser(username, password);
    const token = user.genAuthToken();

    res
      .cookie("x-access-token", token)
      .status(httpStatus.CREATED)
      .json({ user, token });
  } catch (err) {
    next(err);
  }
};

module.exports.signin = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await authService.signInWithUsernameAndPassword(
      username,
      password
    );
    const token = user.genAuthToken();

    res.cookie("x-access-token", token).status(200).json({ user, token });
  } catch (err) {
    next(err);
  }
};

module.exports.isAuth = async (req, res, next) => {
  try {
    res.status(200).json(req.user);
  } catch (err) {
    next(err);
  }
};
