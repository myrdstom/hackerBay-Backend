const { body } = require("express-validator/check");

export default class Validations {
  static validity = method => {
    switch (method) {
      case "login": {
        return [
          body('username')
              .isLength({ min: 2, max: 32 })
              .withMessage('Username must be at least 2 chars long and utmost 32'),
          body('password')
              .isLength({ min: 8, max: 32 })
              .withMessage('Password must be at least 8 chars long and utmost 32')
              .matches(/\d/)
              .withMessage('Password must contain a number'),
        ];
      }
    }
  };

  static displayError = (req, res, errors) => {
    const errorArr = [];

    errors.array().forEach(error => {
      const data = {
        status: 400,
        message: error.msg,
        field: error.param
      };
      errorArr.push(data);
    });
    return res.status(400).json({ errors: errorArr });
  };
}
