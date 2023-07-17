const express = require("express");
const employeeController = require("../controllers/employeeController");

const router = express.Router();

router.post("/create", employeeController.create);
router.get("/all", employeeController.getAll);
router.get("/user/:id", employeeController.getUserById);
router.post("/employee-filter", employeeController.filterEmployees);
router.post("/update-personal-details", employeeController.updatePersonalDetails);
router.post("/update-contact-details", employeeController.updateContactDetails);
router.post("/insert-emergency-contact-details", employeeController.insertEmergencyContactDetails);
router.post("/delete-emergency-contact-details", employeeController.deleteEmergencyContactDetails);
router.post("/insert-company-details", employeeController.insertCompanyDetails);
router.post("/delete-company-details", employeeController.deleteCompanyDetails);
router.post("/insert-college-details", employeeController.insertCollegeDetails);
router.post("/delete-college-details", employeeController.deleteCollegeDetails);
router.post("/insert-language-details", employeeController.insertLanguageDetails);
router.post("/delete-language-details", employeeController.deleteLanguageDetails);

module.exports = router;
