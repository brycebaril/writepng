var readimage = require("readimage")
var writepng = require("../writepng")
var fs = require("fs")

readimage(fs.readFileSync("./doge_jump2.gif"), function (err, image) {
  writepng(image, function (err, buffer) {
    fs.writeFileSync("./doge.png", buffer)
  })
})
