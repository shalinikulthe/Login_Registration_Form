const sequelize = require('sequelize');
const seq = new sequelize('UserAuth','root','shalini',{
    host: '127.0.0.1',
    port: 3306,
    dialect:'mysql'
});

module.exports= {seq};