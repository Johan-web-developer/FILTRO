const {Router} = require('express');
const {check} = require('express-validator');
const {getRutas, postRutas} = require('../controllers/level.controllers.js');


const router = Router();
router.get("/", getRutas);
router.post("/",[
    check('nombre','El nombre debe ser obligatorio').not().isEmpty(),
], postRutas);


module.exports = router;