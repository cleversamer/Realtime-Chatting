const { check, validationResult } = require("express-validator");
const httpStatus = require("http-status");
const { ApiError } = require("../apiError");
const { auth: errors } = require("../../config/errors");

const handler = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const statusCode = httpStatus.BAD_REQUEST;
    const message = errors.array()[0].msg;
    const error = new ApiError(statusCode, message);
    return next(error);
  }

  next();
};

const loginValidator = [
  check("username")
    .trim()
    .isLength({ min: 3, max: 32 })
    .withMessage(errors.invalidUsername),

  check("password")
    .trim()
    .isLength({ min: 8, max: 32 })
    .withMessage(errors.invalidPassword),

  handler,
];

const registerValidator = [...loginValidator, handler];

module.exports = {
  loginValidator,
  registerValidator,
};
