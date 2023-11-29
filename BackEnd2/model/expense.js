const Sequelize = require('sequelize');

const sequelize = require('../util/database');


//model
const Expense = sequelize.define('expense',{
    id:{
        type : Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey : true,
        allowNull : false,
    },
    description :{
        type:Sequelize.STRING,
        allowNull:true,
    },
    price : {
        type : Sequelize.INTEGER,
        allowNull : false,
    },
    category :{
        type : Sequelize.STRING,
        allowNull : false,
    }
});


module.exports = Expense