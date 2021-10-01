const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
    const compliments = ["Gee, you're a smart cookie!",
        "Cool shirt!",
        "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);

});

app.get("/api/fortune", (req, res) => {
    const fortunes = ["You are headed towards success!",
        "You will find the love of your life soon!",
        "You will live a long and happy life :D",
        "It's not the plan that is important, it's the planning.",
        "An exciting opportunity lies ahead",
        "Choose another fortune"
    ];


    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];

    res.status(200).send(randomFortune);

});

app.post("/api/compliment", (req, res) => {
    newComp = req.body;
    compliments.push(newComp);

    res.status(200).send(newComp);
});

// app.delete("/api/fortune")


app.listen(4000, () => console.log("Server running on 4000"));