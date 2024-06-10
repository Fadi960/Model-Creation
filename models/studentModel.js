const { models } = require("./index");

module.exports = {
    createStudent : async(body) => {
        try{
            const student = await models.student.create({...body});
            return{
                response: student,
            }
        }catch(error){
            console.log("error from model",error);
            return{
                error: error,
            };
        }
    },

    getAllStudent : async()=>{
        try{
            const student = await models.student.findAll({
                attributes: {
                    exclude: ["password"],
                }
            });
            return{
                response: student,
            };
        } catch (error) {
            return {
                error: error,
            };
        }
    },
    findStudentById : async(studentId)=>{
        try{
            const student = await models.student.findByPk(studentId,{
                attributes: {
                    exclude: ["password"],
                }
            });
            if (!student) {
                throw new Error('Student not found');
            }
            return{
                response: student,
            };
        } catch (error) {
            console.log("error from model",error);
            return {
                error: error,
            };
        }
    },
    findStudentByName: async (studentName) => {
        try {
            const student = await models.student.findOne({
                where: { studentName: studentName },
                attributes: {
                    exclude: ["password"],
                },
            });
            return {
                response: student,
            };
        } catch (error) {
            console.log("error from model",error);
            return {
                error: error,
            };
        }
    },

    deleteStudent: async (studentId) => {
        try{
            const deleteStudent = await models.student.destroy({ 
                where: {
                    studentId: studentId,
                },
            });

            return {
                response: deleteStudent,
            };
        } catch (error) {
            console.log("error from model",error);
            return {
                error: error,
            };
        }
    },
    updateStudent: async ({ studentId, ...body }) => {
        try {
            console.log(studentId,body);
            const updateStudent = await models.student.update({ ...body},{
                where: {
                    studentId: studentId,
            },
            })
            return {
                response: updateStudent,
            };
        } catch (error) {
            console.log("error from model",error);
            return {
                error: error,
            };
        }
    },
};