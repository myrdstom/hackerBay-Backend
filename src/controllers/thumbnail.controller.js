import download from 'image-downloader';
import path from 'path';
import { validationResult } from 'express-validator/check';
import { resizeImage } from '../util/helpers';
import Validations from '../util/validation';

class ThumbnailController {
    /**
     * @desc Downloads an image and resizes it to a thumbnail as specified
     *
     * @param {object} req Get request object from client
     * @param {object} res REST Response object
     * @returns {object} Response containing a message confirming the image has been downloaded and re-sized
     */
    static async createThumbnail(req, res) {
        const errors = validationResult(req);
        const { url } = req.body;
        if (!errors.isEmpty()) {
            return Validations.displayError(req, res, errors);
        }
        const image = url.split('.').pop();

        const downloadedImage = path.join(
            __dirname,
            `../assets/images/downloaded/Img.${image}`
        );
        const thumbnail = path.join(
            __dirname,
            `../assets/images/re-sized/newImg.${image}`
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
