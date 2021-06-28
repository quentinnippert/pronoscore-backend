var GamesModel = require('../models/GamesModel');

const games_DELETE_Controller = async (req, res) => {
   console.log(req.params, '< - - - - - req params');
    let gameToDelete = await GamesModel.deleteOne({
        _id: req.body.gameId
    })
    
    res.json({result: true})
}

module.exports = games_DELETE_Controller;