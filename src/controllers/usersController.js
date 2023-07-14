const User = require('../models/userModel');

// GET /users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// GET /users/:id
const getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// POST /users
const addUser = async (req, res) => {
    const userData = req.body;

    try {
        const newUser = await User.create(userData);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// PUT /users/:id
const updateUser = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;

    try {
        const user = await User.findByIdAndUpdate(id, updatedData, { new: true });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// DELETE /users/:id
const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findByIdAndDelete(id);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser
};
