var Tools = function(req, res){
  if (!(this instanceof Tools)) return new Tools(req, res);
  this.lib = {
    fs: require("fs"),
    mst: require("mustache"),
    mime: require("mime"),
  },
  this.req = require("./req")(req, res, this.lib),
  this.res = require("./res")(req, res, this.lib);
};

module.exports = exports = Tools;
