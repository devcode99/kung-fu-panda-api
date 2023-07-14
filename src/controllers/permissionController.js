const Permission = require('../models/permissionModel');
const Role = require('../models/roleModel');

// GET /permissions
const getAllPermissions = async (req, res) => {
    try {
        const permissions = await Permission.find();
        res.json(permissions);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// GET /permissions/:id
const getPermissionById = async (req, res) => {
    const { id } = req.params;

    try {
        const permission = await Permission.findById(id);

        if (!permission) {
            return res.status(404).json({ error: 'Permission not found' });
        }

        res.json(permission);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// POST /permissions
const addPermission = async (req, res) => {
    const { name, icon, path } = req.body;

    try {
        const newPermission = await Permission.create({ name, icon, path });
        res.status(201).json(newPermission);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// POST /permissions/assign-permission
const assignPermission = async (req, res) => {
    const { roleIds, permissionIds } = req.body;
    try {
        // Update each role with permissionIds
        await Role.updateMany({ _id: { $in: roleIds } }, { permission: permissionIds })

        res.status(200).json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

// PUT /permissions/:id
const updatePermission = async (req, res) => {
    const { id } = req.params;
    const { name, icon, path } = req.body;

    try {
        const permission = await Permission.findByIdAndUpdate(id, { name, icon, path }, { new: true });

        if (!permission) {
            return res.status(404).json({ error: 'Permission not found' });
        }

        res.json(permission);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// DELETE /permissions/:id
const deletePermission = async (req, res) => {
    const { id } = req.params;

    try {
        const permission = await Permission.findByIdAndDelete(id);

        if (!permission) {
            return res.status(404).json({ error: 'Permission not found' });
        }

        res.json({ message: 'Permission deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};


module.exports = {
    getAllPermissions,
    getPermissionById,
    addPermission,
    updatePermission,
    deletePermission,
    assignPermission
};
