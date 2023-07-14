const Role = require('../models/roleModel');

// GET /roles
const getAllRoles = async (req, res) => {
    try {
        const roles = await Role.find();
        res.json(roles);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// GET /roles/:id
const getRoleById = async (req, res) => {
    const { id } = req.params;

    try {
        const role = await Role.findById(id);

        if (!role) {
            return res.status(404).json({ error: 'Role not found' });
        }

        res.json(role);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// POST /roles
const addRole = async (req, res) => {
    const { name, permissions } = req.body;

    try {
        const newRole = await Role.create({ name, permissions });
        res.status(201).json(newRole);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// PUT /roles/:id
const updateRole = async (req, res) => {
    const { id } = req.params;
    const { name, permissions } = req.body;

    try {
        const role = await Role.findByIdAndUpdate(id, { name, permissions }, { new: true });

        if (!role) {
            return res.status(404).json({ error: 'Role not found' });
        }

        res.json(role);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};


// DELETE /roles/:id
const deleteRole = async (req, res) => {
    const { id } = req.params;

    try {
        const role = await Role.findByIdAndDelete(id);

        if (!role) {
            return res.status(404).json({ error: 'Role not found' });
        }

        res.json({ message: 'Role deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getAllRoles,
    getRoleById,
    addRole,
    updateRole,
    deleteRole
};
