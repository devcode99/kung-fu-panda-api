const express = require("express");
const router = express.Router();
const migrationHelper = require('../controllers/migrationController')

/**
 * Add initial roles and permissions to the database
 */
router.get('/roles-permissions', async (req, res, next) => {
    try {
        await migrationHelper.addRolesAndPermissions()
        res.send({
            message: 'Roles and permission migrations has been successfully applied'
        })
    } catch (error) {
        res.send({
            error: error.message
        })
    }
})

/**
 * Assign admin role to user, need to pass email in body
 */
router.post('/upgrade-admin', async (req, res, next) => {
    const { email } = req.body
    try {
        await migrationHelper.upgradeToAdmin(email)
        res.send({
            message: `User with ${email} has been added Admin role`
        })
    } catch (error) {
        res.send({
            error: error.message
        })
    }
})

module.exports = router;