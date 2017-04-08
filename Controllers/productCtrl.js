let db;

module.exports = {

  setDb: function(database) {
    db = database;
  },

  get: function(req, res){
    db.read_product(function(err, product){
      res.send(product)
    })
  },

}
