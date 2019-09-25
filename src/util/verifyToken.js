import jwt from 'jsonwebtoken';

export default class verifyToken {
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
                    status: 400,
                    message: 'Invalid token',
                },
            });
        }
    };
}
