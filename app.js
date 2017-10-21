var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    var url = "http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=5FAF55824069CF53EA423500DCE85E6C&steamid=76561197981697308&format=json&include_played_free_games=1&include_appinfo=1";
    request(url, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var parsedBody = JSON.parse(body);
            res.render("results", {data: parsedBody});
        }
    })
})

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Movie App is ON");
})