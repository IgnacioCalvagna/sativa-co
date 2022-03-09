const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models");



// router.get('/',(req, res)=>{
//   entre:entre 
// })

router.post("/register", (req, res) => {
  User.create(req.body).then((user) => {
    res.sendStatus(201);
  });
});
router.post("/login", passport.authenticate("local"), (req, res) => {
  res.send(req.user);
});
router.post("/logout", (req, res) => {
  req.logOut();
  res.sendStatus(200);
});
router.put("/:id", (req, res) => {
  const { id } = req.params;
  User.update(req.body, {
    where: {
      id
    },
    returning: true,
    plain: true,
  }).then((result) => {
    const user = result[1];
    res.status(201).json({
      user,
    });
  });
});

router.get('/me',(req,res)=>{
    if(!req.user) return res.sendStatus(401)
    res.send(req.user); 
}); 



module.exports = router;