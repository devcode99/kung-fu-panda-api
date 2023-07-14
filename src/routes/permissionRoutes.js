const express = require('express');
const router = express.Router();
const permissionController = require('../controllers/permissionController');

// GET /permissions
router.get('/', permissionController.getAllPermissions);

// GET /permissions/:id
router.get('/:id', permissionController.getPermissionById);

// POST /permissions
router.post('/', permissionController.addPermission);

// POST /permissions/assign-permission
router.post('/assign-permission', permissionController.assignPermission);

// PUT /permissions/:id
router.put('/:id', permissionController.updatePermission);

// DELETE /permissions/:id
router.delete('/:id', permissionController.deletePermission);

module.exports = router;
