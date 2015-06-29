var Flags = function(lib, fs, req, res){
  this.lib = lib;
  this.req = req;
  this.res = res;
  this.libPath = __dirname + "/../" + this.lib;
  this.flagsPath = this.libPath + "/flags.json";
  this.flagsRaw, this.flagsJSON;
  this.fs = fs || require("fs");
};

Flags.prototype.parseFlags = function(){
  this.fs.readFile(this.flagsPath, function(err, data){
  	var data = JSON.parse(data.toString());
  });
}

module.exports = exports = Flags;
