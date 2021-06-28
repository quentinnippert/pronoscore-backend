var GamesModel = require('../models/GamesModel');

const games_PUT_Controller = async (req, res) => {
    console.log(req.body, '<- -  - - req body');
    let gameUpdate = await GamesModel.updateOne(
        { _id: req.body.id },
        {
            home_team_score: req.body.homeScore,
            outside_team_score: req.body.outsideScore,
            guessed: req.body.status,
            finished: true,
        }
    )

    res.json({})
}

module.exports = games_PUT_Controller;