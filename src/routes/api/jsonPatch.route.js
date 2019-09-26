import { Router } from 'express';
import JsonPatchController from '../../controllers/jsonPatch.controller';
import verifyToken from '../../util/verifyToken';
import Validations from '../../util/validation';
const { checkSchema } = require('express-validator/check');

const router = Router();

router.post(
    '/jsonPatch',
    verifyToken.authenticate,
    Validations.validity('jsonPatch'),
    JsonPatchController.jsonPatch,

);

export default router;
