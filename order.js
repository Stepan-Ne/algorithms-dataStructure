const Order = sequelize.define('Order', {
  // Model attributes are defined here
  pizzaName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  id: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(Order === sequelize.models.Order); // true