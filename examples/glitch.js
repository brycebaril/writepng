var readimage = require("readimage")
var writepng = require("../writepng")
var fs = require("fs")

readimage(fs.readFileSync("./ravenwall.png"), function (err, image) {
  var rgba = image.frames[0].data
  for (var i = 0; i < rgba.length; i += 4) {
    rgba[i] = rgba[i] ^ 255
    rgba[i + 1] = rgba[i + 1] ^ 255
    rgba[i + 2] = rgba[i + 2] ^ 255
  }
  writepng(image, function (err, buffer) {
    fs.writeFileSync("./glitched.png", buffer)
  })
})
