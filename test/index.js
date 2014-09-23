var test = require("tape")
var path = require("path")
var fs = require("fs")
var readimage = require("readimage")

var writepng = require("../writepng")

function readfile(filename, cb) {
  var buf = fs.readFileSync(path.join(__dirname, filename))
  readimage(buf, cb)
}

var pngHeader = new Buffer([137, 80, 78, 71])

test("convert", function (t) {
  readfile("../examples/doge_jump2.gif", function (err, gif) {
    t.notOk(err)
    writepng(gif, function (err, png) {
      t.notOk(err)
      t.equals(png.slice(0, 4).toString(), pngHeader.toString())
      t.end()
    })
  })
})
