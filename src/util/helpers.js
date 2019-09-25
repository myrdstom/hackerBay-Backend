import sharp from 'sharp';

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
