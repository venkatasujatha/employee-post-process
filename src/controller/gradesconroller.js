const { dataSource } = require("../../database");
const grades = require('/home/bharathi/Downloads/sujtha/src/entity/grades')
const employee = require("/home/bharathi/Downloads/sujtha/src/entity/emp")
const employeeRepo = require("/home/bharathi/Downloads/sujtha/src/controller/empController");
const { Between, LessThanOrEqual, MoreThanOrEqual } = require("typeorm");
const gradeRepo = dataSource.getRepository("grades");
const empRepo = dataSource.getRepository("employee1")
const empAbove = dataSource.getRepository("aboveGrade")
const save1 = async (req, res) => {
    try {
        const resp = await gradeRepo.save(req.body);
        console.log(resp)
        res.send(resp)
    }
    catch (error) {
        console.log(error.message)
    }
}

const get1 = async (req, res) => {
    try {
        const resp = await gradeRepo.find();
        console.log(resp);
        const salary = req.body.salary;


    }
    catch (error) {
        console.log(error.message)
    }
}
const add1 = async (req, res) => {
    try {
        console.log(req.body);
        let salary = req.body.salary;
        console.log(req.body);

        const con = await gradeRepo.findOne({
            where: {
                min: LessThanOrEqual(salary),
                max: MoreThanOrEqual(salary)

            }
        });
        console.log(con);

        if (req.body.salary >= con.min && req.body.salary <= con.max) {
            let resp = await empRepo.save({ name: req.body.name, salary_grade: con.grades, designation: req.body.designation })
            //console.log("helo          "+element["grades"])
            console.log(resp)
            //post process
            if (resp.salary_grade >= "C") {
                await empAbove.save({ empid: resp.id, name: resp.name })

            }
            res.send(resp)

        }

        // for (const max in con) {
        //     if (Object.hasOwnProperty.call(con, max)) {
        //         const element = con[max];
        //         console.log(req.body.salary);
        //         console.log(req.body.salary>=element["min"]);
        //         console.log(req.body.salary<=element["max"]);
        //         if(req.body.salary>=element["min"] && req.body.salary<=element["max"])
        //         {
        //            const resp = await empRepo.save({name:req.body.name,salary_grade:element["grades"],designation:req.body.designation})
        //             //console.log("helo          "+element["grades"])

        //             //post process
        //             if(resp.salary_grade>=" C")
        //             {
        //                 await empAbove.save({empid:resp.id,name:resp.name})

        //             }
        //             res.send(resp)

        //         }
        //     }
        // }
    } catch (error) {
        console.log(error.message);

    }
}

//   const add2 = async (req, res) => {
//     try{
//         const con1 =await empRepo.find();
//         console.log(con1)

//         for (const salary_grade in con1) {

//             if (Object.hasOwnProperty.call(con1, salary_grade)) {
//                 const element = con1[salary_grade];
//                 if (element["salary_grade"]=="A" ||  element["salary_grade"]=="B") {
//                   const resp = await empAbove.save({empid:element["id"],name:element["name"]});
//                   console.log(resp);
//                  }
//             }
//         }


//     }catch(error){
//         console.log(error.message)

//     }
//   };


module.exports = { save1, get1, add1 }