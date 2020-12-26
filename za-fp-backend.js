var express = require("express");
var app = express();
var port = 3001;

let PlayerData = {
  TRAVIS: {
    keyboard: "Ducky One 2 Mini",
    mouse: "Steel Series Rival 310",
    headset: "Turtle Beach Atlas Elite",
    monitor: "240hz Alienware Monitor",
    sens: ["800","12%"],
    specs:["Ryzen 7 3700x","2070 Super","16gb 3200mhz ram","X570A-pro"],
    controller: "none",
    ping: 145,
    biography: "Im Travis a 18 year old player from Cape-Town, currently playing for goliath gaming.",
    earnings: "Not Availible",
    resolution: "1920 x 1080",
    social_media: ["https://youtube.com/Travis ZA","https://twitter.com/Travis_ZA","https://tiktok.com/TravisZA","https://instagram.com/TravisZA"],
    debut: "September 2018",
    signed: "GoliathGamingZA",
    main_social: 'https://twitter.com/Travis_ZA'
  },
  ULTRAFY: {
    keyboard: "DEVELOPER",
    mouse: "DEVELOPER",
    headset: "DEVELOPER",
    monitor: "DEVELOPER",
    sens: ["DEVELOPER","DEVELOPER"],
    specs:["DEV","DEV","DEV","DEV"],
    controller: "DEV",
    ping: 20,
    biography: "UHMMM DEVELOPER AND OWNER OF ZA FINGERPRINT ?",
    earnings: "DEVELOPER",
    resolution: "DEV",
    social_media: ["https://youtube.com/c/ultrafy","https://twitter.com/ultrafyy","Developer","https://instagram.com/milahnmartin"],
    debut: "DEVELOPER",
    signed: "DEVELOPER",
    main_social: 'http://twitter.com/ultrafy'
  },
  KAREEM: {
    keyboard: "Ducky One 2 Mini",
    mouse: "coolermaster mm710",
    headset: "hyper x cloud alphas",
    monitor: "240hz alienware monitor",
    sens: ["none","45% 45%"],
    specs:["i7-8700k","2080 super","16gb 3200mhz ram","X570A-pro"],
    controller: "ps4",
    ping: 120,
    biography: "17 year old from the south of Johannesburg, repping Bravado",
    earnings: "R 120k",
    resolution: "1920 x 1080",
    social_media: ["https://twitter.com/bvdkareem", "https://www.youtube.com/channel/UCWMSiQKfP4KTHKh3tgegLVA", "https://www.instagram.com/bvdkareem/", "OTHER ONE"],
    debut: "September 2018",
    signed: "Bravado Gaming",
    main_social: 'https://twitter.com/bvdkareem'
  
  },
  NIKO: {
    keyboard: "Ducky One 2 Mini",
    mouse: "Steel Series Rival 310",
    headset: "Turtle Beach Atlas Elite",
    monitor: "240hz Alienware Monitor",
    sens: ["800","12%"],
    specs:["Ryzen 7 3700x","2070 Super","16gb 3200mhz ram","X570A-pro"],
    controller: "none",
    ping: 145,
    biography: "Im Travis a 18 year old player from Cape-Town, currently playing for goliath gaming.",
    earnings: "Not Availible",
    resolution: "1920 x 1080",
    social_media: ["https://youtube.com/Travis ZA","https://twitter.com/Travis_ZA","https://tiktok.com/TravisZA","https://instagram.com/TravisZA"],
    debut: "September 2018",
    signed: "GoliathGamingZA",
    main_social: 'https://twitter.com/Travis_ZA'
  }
  }




app.get("/data/fortnite", (req, res) => {
  res.send(PlayerData);
});

// app.get("/data/csgo", (req, res) => {
//   res.send(players_csgo);
// });




 
app.listen(port, () => {
  console.log("SERVER IS UP AND LISTENING " + port);
});









