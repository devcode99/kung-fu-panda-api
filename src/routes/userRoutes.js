const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');

// GET /users
router.get('/', userController.getAllUsers);

// GET /users/:id
router.get('/:id', userController.getUserById);

// POST /users
router.post('/', userController.addUser);

// PUT /users/:id
router.put('/:id', userController.updateUser);

// DELETE /users/:id
router.delete('/:id', userController.deleteUser);

module.exports = router;
