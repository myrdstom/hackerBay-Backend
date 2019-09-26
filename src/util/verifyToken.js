import jwt from 'jsonwebtoken';

export default class verifyToken {
    /**
     * @description Check whether the user is authorized, decode a token and check whether it is valid
     /*
     * @returns Returns the 'unAuthorized message' or 'Invalid token' message depending on the credentials a user has used
     */
    static authenticate = (req, res, next) => {
        const token = req.header('Authorization');
        if (!token) {
            return res.status(401).json({
                error: {
                    status: 401,
                    message: 'Access Unauthorized',
                    field: 'NoAuth',
                },
            });
        }
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.verified = decoded;
            next(null, {decoded});
        } catch (e) {
            res.status(400).json({
                error: {
                    message: 'Invalid token',
                },
            });
        }
    };
}
