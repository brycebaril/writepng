module.exports = writepng

var PNG = require("pngjs").PNG
var concat = require("terminus").concat
var xtend = require("xtend")

function writepng(image, opts, callback) {
  if (!callback) {
    callback = opts
    opts = {}
  }
  opts = xtend({width: image.width, height: image.height}, opts)

  var png = new PNG(opts)
  // SINGLE FRAME ONLY
  // TODO: APNG (pngjs doesn't support it)
  png.data = image.frames[0].data
  var out = png.pack()
  out.pipe(concat(function (buffer) {
    callback(null, buffer)
  }))
  out.on("error", callback)
  return out
}
