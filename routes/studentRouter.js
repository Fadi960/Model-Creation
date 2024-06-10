const route = require("express").Router();

const{ createStudent, getAllStudent, findStudentByName,findStudentById, deleteStudent, updateStudent}= require("../controller/studentController");
//const { findStudentById } = require("../models/studentModel");
//const {  findStudentByName } = require("../models/studentModel");

route.post("/createStudent", createStudent);
route.get("/getAllStudent", getAllStudent);
route.get("/findStudentById", findStudentById);
route.get("/findStudentByName", findStudentByName);
route.delete("/deleteStudent", deleteStudent);
route.patch("/updateStudent", updateStudent);

module.exports = route;