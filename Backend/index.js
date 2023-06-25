const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(
  cors({
    origin: "*",
  })
);

let ideas = [
  {
    descript: "Fuck this ",
    Author: "Sam",
    Dept: "IT",
    Goal: "Nutzung nachhaltiger Verkehrsmittel",
    titel: "Zug Nutzung im Inland",
  },
  {
    descript: "Fuck this ",
    Author: "Sam",
    Dept: "IT",
    Goal: "Nutzung nachhaltiger Verkehrsmittel",
    titel: " Keine Abrechnungen ausdrucken ",
  },
];

let userIdeas = [
  {
    descript: "Fuck this ",
    Author: "Sam",
    Dept: "IT",
    Goal: "Nutzung nachhaltiger Verkehrsmittel",
    titel: "Keine Klimaanlage mehr",
  },
  {
    descript: "Fuck this ",
    Author: "Sam",
    Dept: "IT",
    Goal: "Nutzung nachhaltiger Verkehrsmittel",
    titel: " Kein Einwegplastik auf Events ",
  },
];
app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.get("/ideas", (request, response) => {
  console.log("touched");
  response.json(ideas);
});

app.get("/userIdeas", (request, response) => {
  response.json(userIdeas);
});

app.post("/ideas", (request, response) => {
  const idea = request.body;
  console.log(request);
  console.log(idea);
  ideas.push(idea);
});

app.post("/userIdeas", (request, response) => {
  const idea = request.body;
  console.log(request);
  console.log(idea);
  userIdeas.push(idea);
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

const db = require("./queries");

app.get("/kpis", db.getKpis);
