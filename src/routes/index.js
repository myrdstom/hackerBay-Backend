import { Router } from 'express';
import routes from './api';

const apiV1 = '/api/v1';
const router = Router();

router.use(`${apiV1}/`, routes);

export default router;
