var GamesModel = require('../models/GamesModel');

const games_POST_Controller = async (req, res) => {
    let newGame = await new GamesModel({
        home_team: req.body.homeTeam,
        outside_team: req.body.outsideTeam,
        home_team_guess_score: req.body.homeGuessScore,
        outside_team_guess_score: req.body.outsideGuessScore,
        game_date: new Date(req.body.gameDate),
        finished: false,
        })

    let gameSave = await newGame.save();
    
    let gamesPending = await GamesModel.find({finished: false});
    let gamesFinished = await GamesModel.find({finished: true});

    res.json({
        gameSave:gameSave, 
        gamesFinished:gamesFinished, 
        gamesPending:gamesPending
    })
}

module.exports = games_POST_Controller;