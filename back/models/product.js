module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define('Product', {
    item: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.STRING,
    quantity: DataTypes.STRING,
    image_big: DataTypes.STRING,
    image_small: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Product;
};
