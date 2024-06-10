const {Model , DataTypes} = require("sequelize");

const sequelize = require("../../bin/dbConnection");

class mark extends Model {}

mark.init({
    markId: {
        primaryKey: true,
        type: DataTypes.STRING(255),
    },
    markName: {
        unique: true,
        allowNull: false,
        type: DataTypes.STRING(34)
    },
    password: {
        allowNull: true,
        type : DataTypes.STRING(1000),
    },
}, 
{
  timestamps: true,
  paranoid: true,
  tableName: "marks",
  sequelize,
});

module.exports = mark;