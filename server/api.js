const express = require('express');
const router = express.Router();

const {
    getAllDevelopers,
    getDeveloperProfile,
    addDeveloperProfile,
    searchDeveloperProfile,
    deleteDeveloperProfile,
} = require('./developerProfile');


router.route('/developers').get(getAllDevelopers).post(addDeveloperProfile);
router.route('/developers/:id').get(getDeveloperProfile).delete(deleteDeveloperProfile);
router.route('/developers/search/:id').get(searchDeveloperProfile);


module.exports = router;