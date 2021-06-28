var mongoose = require('mongoose');

var GamesSchema = mongoose.Schema({
    home_team: String,
    outside_team: String,
    home_team_guess_score: Number,
    outside_team_guess_score: Number,
    game_date: Date,
    home_team_score: Number,
    outside_team_score: Number,
    guessed: Boolean,
    finished: Boolean,
});

const GamesModel = mongoose.model('games', GamesSchema);

module.exports = GamesModel;