import download from 'image-downloader';
import path from 'path';
import { resizeImage } from '../util/helpers';

class ThumbnailController {
    static async createThumbnail(req, res) {
        try {
            const {url} = req.body;
            const image = url.split('.').pop();
            if (image !== 'jpg') {
                return res.status(400).json({error: {status: 400, message: "Invalid Image type"}})
            }
            const downloadedImage = path.join(__dirname, `../assets/images/downloaded/Img.${image}`);
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
                })
        }catch (e) {
            return res.status(400).json({error: {status: 400, message: "Something went wrong, Please check your inputs"}})
        }
    }

}

export default ThumbnailController;
