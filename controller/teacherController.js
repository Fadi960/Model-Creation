const teacherService = require("../services/teacherService");
const joi = require("joi");

const createTeacherSchema = joi.object().keys({
    teacherName: joi.string().min(3).max(34).required(),
});
const deleteTeacherSchema = joi.object().keys({
    teacherId: joi.string().min(3).max(64),
});
const updateTeacherSchema = joi.object().keys({
    teacherName: joi.string().min(3).max(34).required(),
    teacherId: joi.string().length(36).required(),
});
const findTeacherSchema = joi.object().keys({
    teacherName: joi.string().min(3).max(64).required(),
  });
  const findTeacherIdSchema = joi.object().keys({
    teacherId: joi.string().length(36).required(),
  })

module.exports ={
    createTeacher: async (req, res) => {
        try{
            const validate = await createTeacherSchema.validateAsync(req.body);
            const teacher = await teacherService.createTeacher(validate);

            if(teacher.error){
                return res.send({
                    error: teacher.error,
                });
            }
            return res.send({
                response: teacher.response,
            });
        }catch(error){
            console.log("error from controller",error);
            return res.send({
                error: error,
            });
        }
    },

    getAllTeacher: async(req,res)=>{
        try{
            const teacher = await teacherService.getAllTeacher();
            if(teacher.error){
                return res.send({
                    error: teacher.error,
                });
        }
        return res.send({
            response: teacher.response,
        });
    }catch (error) {
        return res.send({
        error: error,
        });
    }
},

findTeacherById: async(req,res)=>{
    try {
        const validate = await findTeacherIdSchema.validateAsync(req.query);
        console.log(validate.teacherId);
        const teacher = await teacherService.findTeacherById(validate.teacherId);
        if (teacher.error) {
            return {
                error: teacher.error,
            };
        }
    return res.send({
        response: teacher.response,
    });
}catch (error) {
    console.log("error from controller",error);
    return res.send({
    error: error,
    });
}
},
findTeacherByName: async (req, res) => {
    try {
      const validate = await findTeacherSchema.validateAsync(req.query);
      console.log(validate.teacherName);
      const teacher = await teacherService.findTeacherByName(validate.teacherName);

      if (teacher.error) {
        return res.send({
          error: teacher.error,
        });
      }

      return res.send({
        response: teacher.response,
      });
    } catch (error) {
        console.log("error from controller",error);
      return res.send({
        error: error,
      });
    }
  },
deleteTeacher: async (req, res) => {
    try {
        const validate = await deleteTeacherSchema.validateAsync(req.query);
        const deleteTeacher = await teacherService.deleteTeacher(validate.teacherId);

        if (deleteTeacher.error) {
            return res.send({ error: deleteTeacher.error });
        }
        return res.send({ response: deleteTeacher.response });
    } catch (error) {
        console.log("error from controller",error);
        return res.send({ error: error, });
    }
},
  updateTeacher: async (req,res) => {
    try{
        const validate = await updateTeacherSchema.validateAsync(req.body);
        const updateTeacher = await markService.updateTeacher(validate);
        if (updateTeacher.error) {
            return res.send({ error: updateTeacher.error });
        }
        return res.send({ response: updateTeacher.response });
    } catch (error) {
        console.log("error from controller",error);
        return res.send({ error: error, });
    }
    }
  };