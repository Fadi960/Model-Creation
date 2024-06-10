const teacherModel = require("../models/teacherModel");
const { v4: uuid } = require("uuid");
const { 
        createTeacher,
        getAllTeacher,
        findTeacherByName,
        findTeacherById,
        deleteTeacher,
        updateTeacher
    } = require("../controller/teacherController");
const { models } = require("../models");

module.exports = {
    createTeacher: async (body) => {
        try {
            body.teacherId = uuid();

            const teacher = await teacherModel.createTeacher(body);

            if (teacher.error) {
                return {
                    error: teacher.error,
                };
            }
            return {
                response: teacher.response,
            };
        } catch (error) {
            console.log("error from service",error);
            return {
                error: error,
            };
        }
    },


    getAllTeacher: async () => {
        try {
            const teacher = await teacherModel.getAllTeacher();
            if (teacher.error) {
                return {
                    error: teacher.error,
                };
            }
            return {
                response: teacher.response,
            };
        } catch (error) {
            console.log("error from service",error);
            return {
                error: error,
            };
        }
    },
    findTeacherByName: async (teacherName) => {
        try {
          const teacher = await teacherModel.findTeacherByName(teacherName);
          console.log("teacher found", teacher);
    
          if (teacher.error) {
            return {
              error: teacher.error,
            };
          }
    
          //delete student.response.dataValues.password;
          return {
            response: teacher.response,
          };
        } catch (error) {
            console.log("error from service", error);
          return { error: error };
        }
      },

    findTeacherById: async (teacherId) => {
        try {
            const teacher = await teacherModel.findTeacherById(teacherId);
            if (teacher.error) {
                return {
                    error: teacher.error,
                };
            }
            return {
                response: teacher.response,
            };
        } catch (error) {
            console.log("error from service",error);
            return {
                error: error,
            };
        }
    },

    deleteTeacher: async (teacherId) => {
        try {
            const deleteTeacher = await teacherModel.deleteTeacher(teacherId);
            if (deleteTeacher.error || !deleteTeacher.response) {
                return {
                    error: {
                        message: "unable to delete",
                        error: deleteTeacher?.error || deleteTeacher.response,
                    },
                };
            }
            return {
                response: {
                    message: "Teacher is deleted!",
                    response: deleteTeacher.response,
                },
            };
        } catch (error) {
            console.log("error from service",error);
            return {
                error: error,
            };
        }
    },

    updateTeacher: async (body) => {
        try {
            const updateTeacher = await teacherModel.updateTeacher(body);
            if (updateTeacher.error || !updateTeacher.response[0]) {
                return {
                    error: {
                        message: "unable to update",
                        error: updateTeacher?.error || updateTeacher.response,
                    },
                };
            }
            return {
                response: {
                    message: "teacher is updated",
                    response: updateTeacher.response,
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