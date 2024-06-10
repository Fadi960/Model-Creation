const studentModel = require("../models/studentModel");
const { v4: uuid } = require("uuid");
const { 
        createStudent,
        getAllStudent,
        findStudentByName,
        findStudentById,
        deleteStudent,
        updateStudent
    } = require("../controller/studentController");
const { models } = require("../models");

module.exports = {
    createStudent: async (body) => {
        try {
            body.studentId = uuid();

            const student = await studentModel.createStudent(body);

            if (student.error) {
                return {
                    error: student.error,
                };
            }
            return {
                response: student.response,
            };
        } catch (error) {
            console.log("error from service",error);
            return {
                error: error,
            };
        }
    },


    getAllStudent: async () => {
        try {
            const student = await studentModel.getAllStudent();
            if (student.error) {
                return {
                    error: student.error,
                };
            }
            return {
                response: student.response,
            };
        } catch (error) {
            console.log("error from service",error);
            return {
                error: error,
            };
        }
    },
    findStudentByName: async (studentName) => {
        try {
          const student = await studentModel.findStudentByName(studentName);
          console.log("student found", student);
    
          if (student.error) {
            return {
              error: student.error,
            };
          }
    
          //delete student.response.dataValues.password;
          return {
            response: student.response,
          };
        } catch (error) {
            console.log("error from service", error);
          return { error: error };
        }
      },

    findStudentById: async (studentId) => {
        try {
            const student = await studentModel.findStudentById(studentId);
            if (student.error) {
                return {
                    error: student.error,
                };
            }
            return {
                response: student.response,
            };
        } catch (error) {
            console.log("error from service",error);
            return {
                error: error,
            };
        }
    },

    deleteStudent: async (studentId) => {
        try {
            const deleteStudent = await studentModel.deleteStudent(studentId);
            if (deleteStudent.error || deleteStudent.response) {
                return {
                    error: {
                        message: "unable to delete",
                        error: deleteStudent?.error || deleteStudent.response,
                    },
                };
            }
            return {
                response: {
                    message: "Student is deleted!",
                    response: deleteStudent.response,
                },
            };
        } catch (error) {
            console.log("error from service",error);
            return {
                error: error,
            };
        }
    },

    updateStudent: async (body) => {
        try {
            const updateStudent = await studentModel.updateStudent(body);
            if (updateStudent.error || !updateStudent.response[0]) {
                return {
                    error: {
                        message: "unable to update",
                        error: updateStudent?.error || updateStudent.response,
                    },
                };
            }
            return {
                response: {
                    message: "student is updated",
                    response: updateStudent.response,
                },
            };
        } catch (error) {
            console.log("error from service",error);
            return {
                error: error,
            };
        }
    },
};