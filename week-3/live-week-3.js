const express = require("express");
const jwt = require("jsonwebtoken");
const port = 3000;
const app = express();

app.use(express.json());

const ALL_USERS = [
  {
    username: "Kabilash",
    password: "123456",
  },
  {
    username: "Shaaru",
    password: "password",
  },
];

function userExists(username, password) {
  let userExists = false;

  ALL_USERS.forEach((user) => {
    if ((user.username = username && user.password === password)) {
      userExists = true;
    }
  });

  return userExists;
}

app.get("/", function (req, res) {
  res.json("Hello world");
});

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  console.log(username, password);

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist.",
    });
  }
  const token = jwt.sign(
    {
      username: username,
    },
    "secret"
  );

  return res.json(token);
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, "secret");
  const username = decoded.username;

  res.json({
    users: ALL_USERS.filter((user) => user.username !== username),
  });
});

app.listen(port);
