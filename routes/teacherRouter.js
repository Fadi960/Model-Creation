const route = require("express").Router();

const{ createTeacher, getAllTeacher, findTeacherByName,findTeacherById, deleteTeacher, updateTeacher}= require("../controller/teacherController");

route.post("/createTeacher", createTeacher);
route.get("/getAllTeacher", getAllTeacher);
route.get("/findTeacherById", findTeacherById);
route.get("/findTeacherByName", findTeacherByName);
route.delete("/deleteTeacher", deleteTeacher);
route.patch("/updateTeacher", updateTeacher);

module.exports = route;