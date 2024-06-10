const {Model , DataTypes} = require("sequelize");

const sequelize = require("../../bin/dbConnection");

class student extends Model {}

student.init({
    studentId: {
        primaryKey: true,
        type: DataTypes.STRING(255),
    },
    studentName: {
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
  tableName: "students",
  sequelize,
});

module.exports = student;