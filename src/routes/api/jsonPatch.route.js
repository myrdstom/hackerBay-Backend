import { Router } from 'express';
import JsonPatchController from '../../controllers/jsonPatch.controller';
import verifyToken from '../../util/verifyToken';

const router = Router();

router.post(
    '/jsonPatch',
    verifyToken.authenticate,
    JsonPatchController.jsonPatch
);

export default router;
