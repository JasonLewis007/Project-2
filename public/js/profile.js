const { Model, DataTypes } = require('sequelize');
const User = require('./User');
const sequelize = require('../config/connection');

class Profile extends Model { };

Profile.init(
    {
        //field/column definitions
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        phone_number: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
      
    },
    {
        //configuration / options
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'project'
    }
);

module.exports = Project;