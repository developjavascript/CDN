var Flags = function(lib, fs){
  this.lib = lib;
  this.libPath = __dirname + "/../" + this.lib;
  this.flagsPath = this.libPath + "/flags.json";
  this.flagsRaw, this.flagsJSON;
  this.fs = fs || require("fs");
};

Flags.prototype.parseFlags = function(){
  this.fs.readFile(this.flagsPath, function(err, data){

  });
}

module.exports = exports = Flags;
