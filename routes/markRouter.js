const route = require("express").Router();

const{ createMark, getAllMark, findMarkByName,findMarkById, deleteMark, updateMark}= require("../controller/markController");

route.post("/createMark", createMark);
route.get("/getAllMark", getAllMark);
route.get("/findMarkById", findMarkById);
route.get("/findMarkByName", findMarkByName);
route.delete("/deleteMark", deleteMark);
route.patch("/updateMark", updateMark);

module.exports = route;