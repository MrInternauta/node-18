import sharp from 'sharp';
sharp('original.png').resize(100, 100, {

})
  .toFile('copy.png')