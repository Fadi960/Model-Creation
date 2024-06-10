const sequelize = require("../bin/dbConnection");

const student = require("./definitions/students");
const mark = require("./definitions/marks");
const teacher = require("./definitions/teachers");

const models = { student, mark, teacher };


const db = {};

db.sequelize = sequelize;
sequelize.models = models;

module.exports = {db, models};