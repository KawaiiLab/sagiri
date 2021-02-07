<p align="center">
  <img width="600" src="example/01-input.png">
</p>

<p align="center">🔑 En/decrypt images in a kawaii way</p>

<p align="center">
<a href="https://lyn.moe"><img alt="Author" src="https://img.shields.io/badge/Author-Lyn-blue.svg?style=for-the-badge"/></a>
<a href="https://www.npmjs.com/package/@kawaiiLab/sagiri"><img alt="Version" src="https://img.shields.io/npm/v/@kawaiilab/sagiri.svg?style=for-the-badge"/></a>
<img alt="License" src="https://img.shields.io/github/license
/@kawaiilab/sagiri.svg?style=for-the-badge"/>
</p>

***

### Installation

```bash
npm install @kawaiilab/sagiri
```

### Usage

En/decrypt a single image

```node
const ctx = canvas.getContext('2d')

const img = await loadImage(imageData)
ctx.drawImage(img, 0, 0)
imgData = ctx.getImageData(0, 0, width, height)

sagiri.encrypt(imgData, ctx, key)
// sagiri.decrypt(imgData, ctx, key)

const out = fs.createWriteStream(__dirname + '/output.png')
const stream = canvas.createPNGStream()
stream.pipe(out)
out.on('finish', () =>  console.log('Finished.'))
```

#### API

```node
sagiri.encrypt(imgData: ImageData, ctx: CanvasRenderingContext2D, key: String)
```

### Performance

```
Encrypt ./example/01-input.png (1920 × 1080)
Max: 539ms
Avg: 528ms
Min: 501ms

Decrypt: ./example/02-input.png (1920 × 1080)
Max: 464ms
Avg: 468ms
Min: 475ms
```

### Examples

Have look at `./example` folder

### Related

[KawaiiLab/sagiri-cli](https://github.com/KawaiiLab/sagiri-cli)

[KawaiiLab/sagiri-web](https://github.com/KawaiiLab/sagiri-web)

### Credit

[Tharsanan1/ImageEncryptionWeb](https://github.com/Tharsanan1/ImageEncryptionWeb)

[Illustration: エロマンガ先生!!!](https://www.pixiv.net/artworks/62494753)

### Name

[Sagiri Izumi](https://myanimelist.net/character/100993/Sagiri_Izumi) from [Eromanga-sensei](https://myanimelist.net/anime/32901/Eromanga-sensei?q=Eromanga-sensei&cat=anime)

### LICENSE

MIT