module.exports = function AddHeaderMiddleware() {
  return {
    requestHandler: function(req, res, next, target) {
      res.setHeader(target[0], target[1]);
      next();
    },
    entryParser: function(config) {
      if(!config.match(/\s*=\s*/)) {
        throw new Error('Bad format, should be key=value');
      }
      var m = config.match(/^(.*?)\s*=\s*(.*$)/);
      m.shift();
      return m;
    }
  };
};