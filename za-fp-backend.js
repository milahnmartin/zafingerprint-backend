var express = require("express");
var app = express();
var port = 3001;

var players_fortnite = {
  Travis: {
    mouse: 'polla',
    keyboard: 'kolla',
    age: 19,
    gamertag: 'Trv',
    biography: 'wkfjnwevå'
  },
  Milahn: {
    mouse: 'jolla',
    keyboard: 'lpppa',
    age: 20,
    gamertag: 'Polla',
    biography: 'wknjcwek'
  },
  Hutchie:{
    mouse: 'razor',
    keyboard: 'razor',
    age: 32,
    gamertag: 'Hutchie',
    biography: 'wfweif'
  }

};

var players_csgo = {
  Travis: {
    mouse: 'polla',
    keyboard: 'kolla',
    age: 19,
    gamertag: 'Trv',
    biography: 'wkfjnwevå'
  },
  Milahn: {
    mouse: 'jolla',
    keyboard: 'lpppa',
    age: 20,
    gamertag: 'Polla',
    biography: 'wknjcwek'
  },
  Hutchie:{
    mouse: 'razor',
    keyboard: 'razor',
    age: 32,
    gamertag: 'Hutchie',
    biography: 'wfweif'
  },
  Player:{
    biography: '',
    mouse: '',
    age: null,
    earnings: null,
    signed:['Free-Agent','team-name'],
    sens: ['dpi','ingame-sens','mouse-accel'],
    monitor:  '',
    resolution: '',
    social_media: ['Twitter','Instagram','Youtube','etd'],
    debut: ''



  }

};








app.get("/data/fortnite", (req, res) => {
  res.send(players_fortnite);
});

app.get("/data/csgo", (req, res) => {
  res.send(players_csgo);
});




 
app.listen(port, () => {
  console.log("SERVER IS UP AND LISTENING " + port);
});









