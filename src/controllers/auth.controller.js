import jwt from "jsonwebtoken";
import { validationResult } from "express-validator/check";
import Validations from "../util/validation";


class AuthenticationController {
  static async login(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return Validations.displayError(req, res, errors);
    }
    const { username, password } = req.body;
    const token = jwt.sign(
      {
        data: {
          username: username,
          password: password
        }
      },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );
    res.header("Authorization", token);


    return res.status(200).json({
      username: username,
      accessToken: `${token}`,
      expires_in: "24h",
    });
  }
}

export default AuthenticationController;
