// Generated by CoffeeScript 1.3.3
(function() {
  var compile, eco, precompile, preprocess, _ref;

  _ref = require("./compiler"), compile = _ref.compile, precompile = _ref.precompile;

  preprocess = require("./preprocessor").preprocess;

  module.exports = eco = function(source) {
    var _base, _ref1;
    if (eco.cache) {
      return (_ref1 = (_base = eco.cache)[source]) != null ? _ref1 : _base[source] = compile(source);
    } else {
      return compile(source);
    }
  };

  eco.cache = {};

  eco.preprocess = preprocess;

  eco.precompile = precompile;

  eco.compile = compile;

  eco.render = function(source, data) {
    return (eco(source))(data);
  };

  if (require.extensions) {
    require.extensions[".eco"] = function(module, filename) {
      var source;
      source = require("fs").readFileSync(filename, "utf-8");
      return module._compile("module.exports = " + (precompile(source)), filename);
    };
  }

}).call(this);