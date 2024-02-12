import http = require("node:http");
import express = require("express");

const friends = ["KP", "Parag", "Hitesh"];

const router = express.Router();
router.get("/", (req, res) => {
  res.send("<h1>The Best Express Server</h1>");
});
router.get("/friends", (req, res) => {
  res.send(JSON.stringify({ friends }));
});

const app = express();
app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);
server.listen(PORT, () =>
  console.log(`Server is running at the port no.: ${PORT}`)
);
