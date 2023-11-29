const Sequelie = require('sequelize');

const sequelize = new Sequelie('expense_tracker','root',{
    dialect : 'mysql',
    host : localhost,
});

module.exports = sequelize;