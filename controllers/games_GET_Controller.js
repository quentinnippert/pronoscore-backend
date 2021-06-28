var GamesModel = require('../models/GamesModel');

const games_GET_Controller = async (req, res) => {
    
    const gamesPending = await GamesModel.find({finished: false}).sort({game_date: 1});
    const gamesFinished = await GamesModel.find({finished: true}).sort({game_date: -1});

    res.json({title: 'PronoScore Training', pronoPending:gamesPending, gamesFinished:gamesFinished})
}

module.exports = games_GET_Controller;