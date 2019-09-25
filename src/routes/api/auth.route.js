import { Router } from 'express';
import AuthenticationController from '../../controllers/auth.controller';
import Validations from '../../util/validation';

const router = Router();
/**
 * @swagger
 * /authentication:
 * post:
 *      description: Login a user
 *      responses:
 *      '200':
 *          description: A successful response
 */
router.post(
    '/login',
    Validations.validity('login'),
    AuthenticationController.login
);

export default router;
