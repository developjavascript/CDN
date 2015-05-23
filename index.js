"use strict";
var lib = require("./lib"), tools
var CDN = function(req, res){
  tools = new lib.tools(req, res);
  req.tools = tools.req,
  res.tools = tools.res;

  lib.serve(req, res);
};

module.exports = exports = CDN;
