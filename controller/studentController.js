const studentService = require("../services/studentService");
const joi = require("joi");

const createStudentSchema = joi.object().keys({
    studentName: joi.string().min(3).max(34).required(),
});
const deleteStudentSchema = joi.object().keys({
    studentId: joi.string().min(3).max(64),
});
const updateStudentSchema = joi.object().keys({
    studentName: joi.string().min(3).max(34).required(),
    studentId: joi.string().length(36).required(),
});
const findStudentSchema = joi.object().keys({
    studentName: joi.string().min(3).max(64).required(),
  });
  const findStudentIdSchema = joi.object().keys({
    studentId: joi.string().length(36).required(),
  })

module.exports ={
    createStudent: async (req, res) => {
        try{
            const validate = await createStudentSchema.validateAsync(req.body);
            const student = await studentService.createStudent(validate);

            if(student.error){
                return res.send({
                    error: student.error,
                });
            }
            return res.send({
                response: student.response,
            });
        }catch(error){
            console.log("error from controller",error);
            return res.send({
                error: error,
            });
        }
    },

    getAllStudent: async(req,res)=>{
        try{
            const student = await studentService.getAllStudent();
            if(student.error){
                return res.send({
                    error: student.error,
                });
        }
        return res.send({
            response: student.response,
        });
    }catch (error) {
        return res.send({
        error: error,
        });
    }
},

findStudentById: async(req,res)=>{
    try {
        const validate = await findStudentIdSchema.validateAsync(req.query);
        console.log(validate.studentId);
        const student = await studentService.findStudentById(validate.studentId);
        if (student.error) {
            return {
                error: student.error,
            };
        }
    return res.send({
        response: student.response,
    });
}catch (error) {
    console.log("error from controller",error);
    return res.send({
    error: error,
    });
}
},
findStudentByName: async (req, res) => {
    try {
      const validate = await findStudentSchema.validateAsync(req.query);
      console.log(validate.studentName);
      const student = await studentService.findStudentByName(validate.studentName);

      if (student.error) {
        return res.send({
          error: student.error,
        });
      }

      return res.send({
        response: student.response,
      });
    } catch (error) {
        console.log("error from controller",error);
      return res.send({
        error: error,
      });
    }
  },
deleteStudent: async (req, res) => {
    try {
        const validate = await deleteStudentSchema.validateAsync(req.query);
        const deleteStudent = await studentService.deleteStudent(validate.studentId);

        if (deleteStudent.error) {
            return res.send({ error: deleteStudent.error });
        }
        return res.send({ response: deleteStudent.response });
    } catch (error) {
        console.log("error from controller",error);
        return res.send({ error: error, });
    }
},
  updateStudent: async (req,res) => {
    try{
        const validate = await updateStudentSchema.validateAsync(req.body);
        const updateStudent = await studentService.updateStudent(validate);
        if (updateStudent.error) {
            return res.send({ error: updateStudent.error });
        }
        return res.send({ response: updateStudent.response });
    } catch (error) {
        console.log("error from controller",error);
        return res.send({ error: error, });
    }
    }
  };