const { models } = require("./index");

module.exports = {
    createMark : async(body) => {
        try{
            const mark = await models.mark.create({...body});
            return{
                response: mark,
            }
        }catch(error){
            console.log("error from model",error);
            return{
                error: error,
            };
        }
    },

    getAllMark : async()=>{
        try{
            const mark = await models.mark.findAll({
                attributes: {
                    exclude: ["password"],
                }
            });
            return{
                response: mark,
            };
        } catch (error) {
            return {
                error: error,
            };
        }
    },
    findMarkById : async(markId)=>{
        try{
            const mark = await models.mark.findByPk(markId,{
                attributes: {
                    exclude: ["password"],
                }
            });
            if (!mark) {
                throw new Error('Mark not found');
            }
            return{
                response: mark,
            };
        } catch (error) {
            console.log("error from model",error);
            return {
                error: error,
            };
        }
    },
    findMarkByName: async (markName) => {
        try {
            const mark = await models.mark.findOne({
                where: { markName: markName },
                attributes: {
                    exclude: ["password"],
                },
            });
            return {
                response: mark,
            };
        } catch (error) {
            console.log("error from model",error);
            return {
                error: error,
            };
        }
    },

    deleteMark: async (markId) => {
        try{
            const deleteMark = await models.mark.destroy({ 
                where: {
                    markId: markId,
                },
            });

            return {
                response: deleteMark,
            };
        } catch (error) {
            console.log("error from model",error);
            return {
                error: error,
            };
        }
    },
    updateMark: async ({ markId, ...body }) => {
        try {
            console.log(markId,body);
            const updateMark = await models.mark.update({ ...body},{
                where: {
                    markId: markId,
            },
            })
            return {
                response: updateMark,
            };
        } catch (error) {
            console.log("error from model",error);
            return {
                error: error,
            };
        }
    },
};