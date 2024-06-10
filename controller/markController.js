const markService = require("../services/markService");
const joi = require("joi");

const createMarkSchema = joi.object().keys({
    markName: joi.string().min(3).max(34).required(),
});
const deleteMarkSchema = joi.object().keys({
    markId: joi.string().min(3).max(64),
});
const updateMarkSchema = joi.object().keys({
    markName: joi.string().min(3).max(34).required(),
    markId: joi.string().length(36).required(),
});
const findMarkSchema = joi.object().keys({
    markName: joi.string().min(3).max(64).required(),
  });
  const findMarkIdSchema = joi.object().keys({
    markId: joi.string().length(36).required(),
  })

module.exports ={
    createMark: async (req, res) => {
        try{
            const validate = await createMarkSchema.validateAsync(req.body);
            const mark = await markService.createMark(validate);

            if(mark.error){
                return res.send({
                    error: mark.error,
                });
            }
            return res.send({
                response: mark.response,
            });
        }catch(error){
            console.log("error from controller",error);
            return res.send({
                error: error,
            });
        }
    },

    getAllMark: async(req,res)=>{
        try{
            const mark = await markService.getAllMark();
            if(mark.error){
                return res.send({
                    error: mark.error,
                });
        }
        return res.send({
            response: mark.response,
        });
    }catch (error) {
        return res.send({
        error: error,
        });
    }
},

findMarkById: async(req,res)=>{
    try {
        const validate = await findMarkIdSchema.validateAsync(req.query);
        console.log(validate.markId);
        const mark = await markService.findMarkById(validate.markId);
        if (mark.error) {
            return {
                error: mark.error,
            };
        }
    return res.send({
        response: mark.response,
    });
}catch (error) {
    console.log("error from controller",error);
    return res.send({
    error: error,
    });
}
},
findMarkByName: async (req, res) => {
    try {
      const validate = await findMarkSchema.validateAsync(req.query);
      console.log(validate.markName);
      const mark = await markService.findMarkByName(validate.markName);

      if (mark.error) {
        return res.send({
          error: mark.error,
        });
      }

      return res.send({
        response: mark.response,
      });
    } catch (error) {
        console.log("error from controller",error);
      return res.send({
        error: error,
      });
    }
  },
deleteMark: async (req, res) => {
    try {
        const validate = await deleteMarkSchema.validateAsync(req.query);
        const deleteMark = await markService.deleteMark(validate.markId);

        if (deleteMark.error) {
            return res.send({ error: deleteMark.error });
        }
        return res.send({ response: deleteMark.response });
    } catch (error) {
        console.log("error from controller",error);
        return res.send({ error: error, });
    }
},
  updateMark: async (req,res) => {
    try{
        const validate = await updateMarkSchema.validateAsync(req.body);
        const updateMark = await markService.updateMark(validate);
        if (updateMark.error) {
            return res.send({ error: updateMark.error });
        }
        return res.send({ response: updateMark.response });
    } catch (error) {
        console.log("error from controller",error);
        return res.send({ error: error, });
    }
    }
  };