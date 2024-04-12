const router = require('express').Router();

const {
    getAbout,
    getHome,
    getContact
} = require('../controllers/defaultCotroller');


router.get('/', getHome)

router.get('/about', getAbout)

router.get('/contact', getContact)


module.exports = router;