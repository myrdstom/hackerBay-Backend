import * as fs from 'fs';
import sharp from 'sharp';

module.exports = function resize(path, width, height) {
    const readStream = fs.createReadStream(path)
    let transform = sharp();
    if (width || height) {
        transform.resize(width, height)
    }
    return readStream.pipe(transform).pipe(path);
};

