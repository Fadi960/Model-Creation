const markModel = require("../models/markModel");
const { v4: uuid } = require("uuid");
const { 
        createMark,
        getAllMark,
        findMarkByName,
        findMarkById,
        deleteMark,
        updateMark
    } = require("../controller/markController");//change
const { models } = require("../models");

module.exports = {
    createMark: async (body) => {
        try {
            body.markId = uuid();

            const mark = await markModel.createMark(body);

            if (mark.error) {
                return {
                    error: mark.error,
                };
            }
            return {
                response: mark.response,
            };
        } catch (error) {
            console.log("error from service",error);
            return {
                error: error,
            };
        }
    },


    getAllMark: async () => {
        try {
            const mark = await markModel.getAllMark();
            if (mark.error) {
                return {
                    error: mark.error,
                };
            }
            return {
                response: mark.response,
            };
        } catch (error) {
            console.log("error from service",error);
            return {
                error: error,
            };
        }
    },
    findMarkByName: async (markName) => {
        try {
          const mark = await markModel.findMarkByName(markName);
          console.log("mark found", mark);
    
          if (mark.error) {
            return {
              error: mark.error,
            };
          }
    
          //delete student.response.dataValues.password;
          return {
            response: mark.response,
          };
        } catch (error) {
            console.log("error from service", error);
          return { error: error };
        }
      },

    findMarkById: async (markId) => {
        try {
            const mark = await markModel.findMarkById(markId);
            if (mark.error) {
                return {
                    error: mark.error,
                };
            }
            return {
                response: mark.response,
            };
        } catch (error) {
            console.log("error from service",error);
            return {
                error: error,
            };
        }
    },

    deleteMark: async (markId) => {
        try {
            const deleteMark = await markModel.deleteMark(markId);
            if (deleteMark.error || deleteMark.response) {
                return {
                    error: {
                        message: "unable to delete",
                        error: deleteMark?.error || deleteMark.response,
                    },
                };
            }
            return {
                response: {
                    message: "Mark is deleted!",
                    response: deleteMark.response,
                },
            };
        } catch (error) {
            console.log("error from service",error);
            return {
                error: error,
            };
        }
    },

    updateMark: async (body) => {
        try {
            const updateMark = await markModel.updateMark(body);
            if (updateMark.error || !updateMark.response[0]) {
                return {
                    error: {
                        message: "unable to update",
                        error: updateMark?.error || updateMark.response,
                    },
                };
            }
            return {
                response: {
                    message: "student is updated",
                    response: updateMark.response,
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