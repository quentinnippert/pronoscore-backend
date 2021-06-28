var express = require('express');
var router = express.Router();

const games_GET_Controller = require('../controllers/games_GET_Controller');
const games_POST_Controller = require('../controllers/games_POST_Controller');
const games_PUT_Controller = require('../controllers/games_PUT_Controller');
const games_DELETE_Controller = require('../controllers/games_DELETE_Controller');

router.get('/', games_GET_Controller);
router.post('/add-game', games_POST_Controller);
router.put('/update-game', games_PUT_Controller);
router.delete('/delete-game', games_DELETE_Controller);

module.exports = router;
