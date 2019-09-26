import * as jsonpatch from 'fast-json-patch';
import { validationResult } from 'express-validator/check';
import Validations from '../util/validation';

class JsonPatchController {
    static async jsonPatch(req, res) {
        const errors = validationResult(req);
        const { document, patches } = req.body;
        if (!errors.isEmpty()) {
            return Validations.displayError(req, res, errors);
        }
        const patchedObject = jsonpatch.applyPatch(document, patches);

        return res
            .status(201)
            .json({ patchedObject, status: 201, message: 'Document created' });
    }
}

export default JsonPatchController;
