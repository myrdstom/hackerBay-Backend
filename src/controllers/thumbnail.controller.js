import download from 'image-downloader';
import path from 'path';
import { resizeImage } from '../util/helpers';
import { validationResult } from "express-validator/check";
import Validations from "../util/validation";

class ThumbnailController {
    static async createThumbnail(req, res) {
        const errors = validationResult(req);
        const { url } = req.body;
        if (!errors.isEmpty()) {
            return Validations.displayError(req, res, errors);
        }
        const downloadedImage = path.join(
            __dirname,
            `../assets/images/downloaded/Img.jpg`
        );
        const thumbnail = path.join(
            __dirname,
            `../assets/images/re-sized/newImg.jpg`
        );
        await download
            .image({
                url: `${url}`,
                dest: downloadedImage,
            })
            .then(() => {
                resizeImage(downloadedImage, thumbnail, res);
            });
    }
}

export default ThumbnailController;
