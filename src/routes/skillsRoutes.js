const express = require("express");
const skillController = require("../controllers/skillsController");

const router = express.Router();

router.post("/add-skills", skillController.addSkillsToUser);
router.post("/get-user-skills", skillController.getUsersSkills);
router.post("/add", skillController.addSkill);
router.put("/update/:id", skillController.updateSkill);
router.get("/:id", skillController.getSkillById);
router.get("/", skillController.getAllSkills);
router.delete("/:id", skillController.deleteSkill);

module.exports = router;
