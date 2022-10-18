const { dataSource } = require("../../database");

const employeeRepo = dataSource.getRepository("employee1");

const gradeRepo1 =require('../controller/gradesconroller');
const get1 =require('../controller/gradesconroller')
const grades =require("/home/bharathi/Downloads/sujtha/src/entity/grades")
const aboveGradesRepo = dataSource.getRepository("aboveGrade");
const gradeRepo = dataSource.getRepository("grades");

const add = async (req, res) => {
  try {
    
    const resp = await employeeRepo.save(req.body);
    res.send(resp);

  } catch (error) {
    console.log(error.message);
    
  }
};

module.exports = { add};
