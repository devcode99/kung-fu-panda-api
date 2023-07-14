const express = require('express');
const router = express.Router();
const roleController = require('../controllers/rolesController');

// GET /roles
router.get('/', roleController.getAllRoles);

// GET /roles/:id
router.get('/:id', roleController.getRoleById);

// POST /roles
router.post('/', roleController.addRole);

// PUT /roles/:id
router.put('/:id', roleController.updateRole);

// DELETE /roles/:id
router.delete('/:id', roleController.deleteRole);

module.exports = router;
