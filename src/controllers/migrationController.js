const Role = require('../models/roleModel');
const Permission = require('../models/permissionModel');
const User = require('../models/userModel');

const {permissions} = require('../data/permissions');

const addRolesAndPermissions = async () => {
    const permissionDb = await Permission.insertMany(permissions)
    const permissionsHash = {}

    for (const permission of permissionDb) {
        permissionsHash[permission.name] = permission
    }
    const rolesPayload = [
        {
            name: 'Admin',
            permissions: [
                permissionsHash['Dashboard']._id,
                permissionsHash['Roles']._id,
                permissionsHash['Permissions']._id,
            ]
        },
        {
            name: 'Employee',
            permissions: [
                permissionsHash['Dashboard']._id,
                permissionsHash['Work Updates']._id,
            ]
        }
    ]
    await Role.insertMany(rolesPayload)
}

/**
 * Assign admin role to user
 * @param {string} email
 */
const upgradeToAdmin = async (email) => {
    const adminRole = await Role.findOne({name: 'Admin'})
    const user = await User.findOne({email})
    if (user.roles.includes(adminRole._id)) {
        throw new Error('User already has Admin role')
    }
    await User.updateOne({email}, {
        roles: [...JSON.parse(JSON.stringify(user.roles)), adminRole._id]
    })
}

module.exports = {
    addRolesAndPermissions,
    upgradeToAdmin
}