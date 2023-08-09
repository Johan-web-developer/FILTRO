const {Router} = require('express');
const {check} = require('express-validator');
const {getLevel, postLevel} = require('../controllers/level.controllers.js');


const router = Router();
router.get("/", getLevel);
router.post("/",[
    check('nombre','El nombre debe ser obligatorio').not().isEmpty(),
], postLevel);


module.exports = router;