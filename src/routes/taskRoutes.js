const express = require("express");
const taskController = require("../controllers/taskController");

const router = express.Router();

router.post("/create", taskController.create);
router.post("/update/:id", taskController.update);
router.delete("/delete/:id", taskController.remove);
router.post("/task-filter", taskController.filterTasks);
router.post("/check-today-updates", taskController.checkTodayUpdates);
router.get("/:employeeId", taskController.getByEmployeeId);

module.exports = router;
