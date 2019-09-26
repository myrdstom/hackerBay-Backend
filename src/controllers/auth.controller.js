import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator/check';
import Validations from '../util/validation';

class AuthenticationController {
    /**
     * @desc Gets user credentials and logs in the user
     *
     * @param {object} req Get request object from client
     * @param {object} res REST Response object
     * @returns {object} Response containing status message, username and token
     */
    static async login(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return Validations.displayError(req, res, errors);
        }
        const { username, password } = req.body;
        const token = jwt.sign(
            {
                data: {
                    username,
                    password,
                },
            },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );
        res.header('Authorization', token);

        return res.status(200).json({
            status: 200,
            username,
            accessToken: `${token}`,
            expires_in: '24h',
        });
    }
}

export default AuthenticationController;
