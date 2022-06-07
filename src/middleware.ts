import sharp from 'sharp';
import path from 'path';

function resize(
  fullImagePath: string,
  w: number,
  h: number,
  f: string,
  targetUrl: string
) {
  sharp(fullImagePath)
    .resize(w, h)
    .jpeg()
    .toFile(
      path.join(__dirname, `../images/thumb/${f.slice(0, -4)}${w}_${h}.jpg`)
    )
    .then(() => {
      return targetUrl;
    });
}

export default resize;
