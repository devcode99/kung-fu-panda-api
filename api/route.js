const router = require('express').Router()

router.get('/about', (req, res) => {
    res.send({
        message: 'Hello Keyur'
    })
})

module.exports = router