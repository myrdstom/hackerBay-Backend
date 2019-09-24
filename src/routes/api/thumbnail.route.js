import { Router } from 'express';
import ThumbnailController from '../../controllers/thumbnail.controller';
import verifyToken from '../../util/verifyToken';

const router = Router();

router.post(
    '/thumbnail',
    ThumbnailController.createThumbnail
);

export default router;
