import * as jsonpatch from 'fast-json-patch';
import { validationResult } from 'express-validator/check';
import Validations from '../util/validation';

class JsonPatchController {
    /**
     * @desc Gets an input json body and patches it as per the patch request
     *
     * @param {object} req Get request object from client
     * @param {object} res REST Response object
     * @returns {object} Response containing a success message, the un-patched and the patched image
     */
    static async jsonPatch(req, res) {
        const errors = validationResult(req);
        const { document, patches } = req.body;
        if (!errors.isEmpty()) {
            return Validations.displayError(req, res, errors);
        }
        const patchedObject = jsonpatch.applyPatch(document, patches);

        return res
            .status(201)
            .json({ status: 201, patchedObject, message: 'Document created' });
    }
}

export default JsonPatchController;
