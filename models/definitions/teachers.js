const {Model , DataTypes} = require("sequelize");

const sequelize = require("../../bin/dbConnection");

class teacher extends Model {}

teacher.init({
    teacherId: {
        primaryKey: true,
        type: DataTypes.STRING(255),
    },
    teacherName: {
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
  tableName: "teachers",
  sequelize,
});

module.exports = teacher;