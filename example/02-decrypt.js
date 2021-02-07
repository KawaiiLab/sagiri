const fs = require('fs')
const { Image } = require('image-js')
const { createCanvas, loadImage } = require('canvas')
const sagiri = require('./../source')
const key = require('./key').key

const imageData = fs.readFileSync(__dirname + '/02-input.png')

;(async () => {
  const { width, height } = await Image.load(imageData)

  let imgData
  {
    const canvas = createCanvas(width, height)
    const ctx = canvas.getContext('2d')

    const img = await loadImage(imageData)
    ctx.drawImage(img, 0, 0)
    imgData = ctx.getImageData(0, 0, width, height)

    sagiri.decrypt(imgData, ctx, key)

    const out = fs.createWriteStream(__dirname + '/02-output.png')
    const stream = canvas.createPNGStream()
    stream.pipe(out)
    out.on('finish', () =>  console.log('Finished.'))
  }
})()
