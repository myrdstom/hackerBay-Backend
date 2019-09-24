import * as fs from 'fs';
const download = require('image-downloader');

class ThumbnailController {
    static async createThumbnail(req, res, next) {
        try {
            const { url } = req.body;
            const path = `${__dirname}/Img${Date.now()}.jpg`;
            const options = {
                url: `${url}`,
                dest: path,
            };
            const { filename, image } = await download.image(options);
            return res.status(200).json({ message: 'success' });
        } catch (e) {
            console.error(e);
        }
        return res.status(200).json({ message: 'jsonPatch works' });
    }
}

export default ThumbnailController;
