const seedrandom = require('seedrandom')

function rightRotate(source, diff) {
  let circleSize = 256
  let rotatedVal = (source + diff) % circleSize
  if (rotatedVal < 0 || rotatedVal > 255) {
      alert("wrong")
  }
  return (source + diff) % circleSize
}

function leftRotate(source, diff) {
  let circleSize = 256
  if (source >= diff) {
      return source - diff
  }
  else {
      return circleSize - (diff - source)
  }
}

function getPixel(imgData, index) {
  var i = index * 4, d = imgData.data
  return [d[i], d[i + 1], d[i + 2], d[i + 3]] // [R,G,B,A]
}

function setPixel(imgData, index, r, g, b, a) {
  var i = index * 4, d = imgData.data
  d[i] = r
  d[i + 1] = g
  d[i + 2] = b
  d[i + 3] = a
}

function setPixelXY(imgData, x, y, r, g, b, a) {
  return setPixel(imgData, y * imgData.width + x, r, g, b, a)
}

function general (imageData, ctx, rotateFunction, encryptionKey) {
  let random = seedrandom(encryptionKey)
  let max = 257
  let min = 0
  for (let index = 0; index < imageData.data.length / 4; index++) {
      let randomNum = () => Math.floor(random() * (max - min)) + min
      let colorData = getPixel(imageData, index)
      colorData[0] = rotateFunction(colorData[0], randomNum())
      colorData[1] = rotateFunction(colorData[1], randomNum())
      colorData[2] = rotateFunction(colorData[2], randomNum())
      setPixelXY(imageData, Math.floor(index % imageData.width), Math.floor(index / imageData.width), colorData[0], colorData[1], colorData[2], 255)
  }
  ctx.putImageData(imageData, 0, 0)
}

module.exports = {
  encrypt: (imageData, ctx, encryptionKey) => {
    general(imageData, ctx, (source, diff) => {
      return leftRotate(source, diff)
    }, encryptionKey)
  },
  decrypt: (imageData, ctx, encryptionKey) => {
    general(imageData, ctx, (source, diff) => {
      return rightRotate(source, diff)
    }, encryptionKey)
  },
}