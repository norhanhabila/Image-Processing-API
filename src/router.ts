import express from 'express';
import fs from 'fs';
import sharp from 'sharp';
import path from 'path';
import resize from './middleware';
const routes = express.Router();

routes.get('/', (req: express.Request, res: express.Response) => {
  interface Queryparams {
    filename?: string;
    height?: string;
    width?: string;
  }
  const queryparams: Queryparams = req.query;

  //checks if all the query parameters are present.
  if (!queryparams.filename || !queryparams.height || !queryparams.width)
    return res.send(
      'Filename, Height and width are required query parameters!'
    );

  //checks if the filename is proper extension.
  if (queryparams.filename.split('.').pop() !== 'jpg')
    return res.send('Please enter valid extension ".jpg"');

  const f = queryparams.filename;
  const w = parseInt(queryparams.width);
  const h = parseInt(queryparams.height);
  const targetUrl = path.join(
    __dirname,
    `../images/thumb/${f.slice(0, -4)}${w}_${h}.jpg`
  );

  //checks if the width and height are positive integer.
  if (isNaN(w) || w <= 0 || isNaN(h) || h <= 0)
    res.send('Width and Height are supposed to be a positive integer!');

  //checks if the image in my database.
  const fullImagePath = path.join(__dirname, `../images/full/${f}`);
  if (fs.existsSync(fullImagePath)) {
    console.log('found');

    //checks if the thumb is already available or do we need to create one.
    if (fs.existsSync(targetUrl)) return res.sendFile(targetUrl);
    else res.send(resize(fullImagePath, w, h, f, targetUrl));
  } else {
    res.send('This image is not available..');
  }
});

export default routes;
