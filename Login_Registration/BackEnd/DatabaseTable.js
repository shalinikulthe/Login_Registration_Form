const { INTEGER, STRING } = require('sequelize');
const {seq} = require ('./Database')
const User = seq.define('users',{
    id:{
        type:INTEGER,
        primaryKey:true,
        autoIncrement:true

    },
    username:{
        type:STRING,
        allowNull: false,
        

    },
    email:{
        type:STRING,
        allowNull: false,

    },
    password:{
        type:STRING,
        allowNull: false,

    },
    
},
{ timestamps: false, freezeTableName: false });

module.exports = {User}
