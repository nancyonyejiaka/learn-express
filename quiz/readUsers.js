const express = require("express");
const router = express.Router();

router.get("/usernames", (req, res) => {
  let usernames = req.users.map(function (user) {
    return { id: user.id, username: user.username };
  });
  res.send(usernames);
});

router.get("/username/:username", (req, res) => {
  let name = req.params.username;
  let usersWithUsername = req.users.filter(function (user) {
    return user.username === name;
  });
  console.log(usersWithUsername);
  res.send(usersWithUsername);
});

module.exports = router;
