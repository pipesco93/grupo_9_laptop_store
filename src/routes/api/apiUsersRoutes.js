const express = require('express');
const router = express.Router();
const userApiController = require('../../controllers/api/userApiController');



router.get('/usuarios', userApiController.apiUsers);
router.get('/usuarios/:id', userApiController.apiUserDetail);

module.exports = router;