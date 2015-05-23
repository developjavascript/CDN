var path;
var Serve = function(req, res){
  path = req.tools.path();
  console.log(path, ":", path.length)
  if (path.length <= 2 && path.length > 0) {
    if (path.length !== 1) {
      // Deliever content
      res.end("Deliever content")
    } else {
      // Index different versions.
      res.end("Index different versions.")
    }
  } else {
    // 404
    res.writeHead(404, {"Content-Type": "application/json"});
    res.end(
      JSON.stringify({"error":{"code":404, "message":"Not found."}})
    );
  }
};

module.exports = exports = Serve;
