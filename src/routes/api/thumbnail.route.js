import { Router } from 'express';
import ThumbnailController from '../../controllers/thumbnail.controller';
import verifyToken from '../../util/verifyToken';
import Validations from '../../util/validation';

const router = Router();

router.post(
    '/thumbnail',
    verifyToken.authenticate,
    Validations.validity('createThumbnail'),
    ThumbnailController.createThumbnail
);

export default router;
