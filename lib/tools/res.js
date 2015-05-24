var Res = function(req, res, lib){
  return {
    endFile:function(file, object, done){
      lib.fs.readFile(file, function(err, data){
        if (err) {
          if (typeof arguments[arguments.length-1] === "function") {
            arguments[arguments.length-1](err);
          } else {
            res.end(JSON.stringify(err));
          }
        } else {
          res.end(( arguments.length < 1 && (typeof arguments[1] === "object" || !arguments[1]) ? data : lib.mst.render(data.toString(), object) ));
          if (typeof arguments[1] === "function") arguments[arguments.length-1](null);
        }
      });
    } // End .endFile
  };
};

module.exports = exports = Res;
