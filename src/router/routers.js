const router = require("express").Router();

const empController = require("../controller/empController");
const gradescontroller =require("/home/bharathi/Downloads/sujtha/src/controller/gradesconroller");


router.post("/save", empController.add);
router.post("/savegrades",gradescontroller.save1)
router.post("/saveemp",gradescontroller.add1)
router.get('/getall',gradescontroller.get1)
//router.post("/addgrade",gradescontroller.add2)


module.exports = router;
