

class JsonPatchController {
    static async jsonPatch(req, res, next){

        return res.status(200).json({message: 'jsonPatch works'});
    }
}

export default JsonPatchController
