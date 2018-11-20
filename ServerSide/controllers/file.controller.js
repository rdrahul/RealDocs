const
path = require('path'),
File = require('../models/file.model'),
Operators = require('../utilities/operator');
var multer = require('multer');
var fs  = require('fs');
var crypto = require('crypto');
var bodyParser = require('body-parser');
 /** upload a file
  * post method
 */

 // stores the uploaded file
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        var dir = './uploads';
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
        callback(null, dir);
    },
    filename: function (req, file, callback) {
        //callback(null, file.originalname);
        crypto.pseudoRandomBytes(16, function(err, raw) {
            if (err) 
                return callback(err);
            callback(null, raw.toString('hex') + path.extname(file.originalname));
          });
    }
});

var upload = multer({storage: storage}).array('files', 12);
let uploadPro = function (req, res, next) {
    upload(req, res, function (err) {
        if (err) {
            return  res.status(500).json( {err : err} );
        }
        res.end("Upload completed.");
    });
}

module.exports = {
    upload :uploadPro
}