import sharp from 'sharp';

/**
* @description Obtain the downloaded Image, resize it and serve the thumbnail
* @param {paths} path to the downloaded Image
* @param {newPath} path to the thumbnail
*
* @returns Returns the success message when the thumbnail is created
*/
export const resizeImage = (paths, newPath, res) => {
    sharp(paths)
        .resize(50, 50)
        .toFile(newPath)
        .then(() => {
            return res
                .status(201)
                .json({ status: 201, message: 'Image downloaded and re-sized' });
        })
};
