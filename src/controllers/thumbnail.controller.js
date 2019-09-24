class ThumbnailController {
    static async createThumbnail(req, res, next){
        return res.status(200).json({message: 'jsonPatch works'});
    }
}

export default ThumbnailController
