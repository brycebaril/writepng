writepng
=====

[![NPM](https://nodei.co/npm/writepng.png)](https://nodei.co/npm/writepng/)

Take an image in the format output by http://npm.im/readimage and write it to a png.

NOTE: This library does not currently support APNG (animated pngs). If the image has multiple frames, only the first will be saved. 

```javascript
var readimage = require("readimage")
var writepng = require("writepng")
var fs = require("fs")

readimage(fs.readFileSync("./image.jpg"), function (err, image) {
  writepng(image, function (err, buffer) {
    fs.writeFileSync("./image.png", buffer)
  })
})

```

More examples are in the examples/ folder!

API
===

`require("writepng")(imageBuffer, callback)`
---

Write a buffer that represents a png image generated from the imageBuffer.

`require("writepng")(imageBuffer, options, callback)`
---

The same as above, but `options` can be defined to match those in [pngjs](http://npm.im/pngjs)
```

LICENSE
=======

MIT
