const { User } = require("../models/user.model");
const bcrypt = require("bcrypt");
const { ApiError } = require("../middleware/apiError");
const httpStatus = require("http-status");
const errors = require("../config/errors");
const userService = require("./users.service");

module.exports.createUser = async (username, password) => {
  try {
    const registeredUser = await User.findOne({ username });
    if (registeredUser) {
      throw new ApiError(httpStatus.BAD_REQUEST, errors.auth.usernameUsed);
    }

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const user = new User({ username, password: hashed });
    await user.save();
    return user;
  } catch (err) {
    throw err;
  }
};

module.exports.signInWithUsernameAndPassword = async (username, password) => {
  try {
    const user = await userService.findUserByUsername(username);

    if (!user) {
      throw new ApiError(httpStatus.NOT_FOUND, errors.auth.usernameNotUsed);
    }

    if (!(await user.comparePassword(password))) {
      throw new ApiError(
        httpStatus.UNAUTHORIZED,
        errors.auth.incorrectCredentials
      );
    }

    return user;
  } catch (err) {
    throw err;
  }
};
