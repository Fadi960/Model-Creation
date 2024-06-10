const { models } = require("./index");

module.exports = {
    createTeacher : async(body) => {
        try{
            const teacher = await models.teacher.create({...body});
            return{
                response: teacher,
            }
        }catch(error){
            console.log("error from model",error);
            return{
                error: error,
            };
        }
    },

    getAllTeacher : async()=>{
        try{
            const teacher = await models.teacher.findAll({
                attributes: {
                    exclude: ["password"],
                }
            });
            return{
                response: teacher,
            };
        } catch (error) {
            return {
                error: error,
            };
        }
    },
    findTeacherById : async(teacherId)=>{
        try{
            const teacher = await models.teacher.findByPk(teacherId,{
                attributes: {
                    exclude: ["password"],
                }
            });
            if (!teacher) {
                throw new Error('Teacher not found');
            }
            return{
                response: teacher,
            };
        } catch (error) {
            console.log("error from model",error);
            return {
                error: error,
            };
        }
    },
    findTeacherByName: async (teacherName) => {
        try {
            const teacher = await models.teacher.findOne({
                where: { teacherName: teacherName },
                attributes: {
                    exclude: ["password"],
                },
            });
            return {
                response: teacher,
            };
        } catch (error) {
            console.log("error from model",error);
            return {
                error: error,
            };
        }
    },

    deleteTeacher: async (teacherId) => {
        try{
            const deleteTeacher = await models.teacher.destroy({ 
                where: {
                    teacherId: teacherId,
                },
            });

            return {
                response: deleteTeacher,
            };
        } catch (error) {
            console.log("error from model",error);
            return {
                error: error,
            };
        }
    },
    updateTeacher: async ({ teacherId, ...body }) => {
        try {
            console.log(teacherId,body);
            const updateTeacher = await models.teacher.update({ ...body},{
                where: {
                    teacherId: teacherId,
            },
            })
            return {
                response: updateTeacher,
            };
        } catch (error) {
            console.log("error from model",error);
            return {
                error: error,
            };
        }
    },
};