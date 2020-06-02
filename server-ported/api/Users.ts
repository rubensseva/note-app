import express from "express";

const router = express.Router();

import User from '../model/User';

router.get("/", (req, res) => {
  res.send("user api");
});

// Home page route.
router.post("/loginUser", async (req, res) => {
  try {
    const { name, password } = req.body;
    const user = await User.findOne({username: name, password});
    if (!user) {
      res.status(404).json({msg: "wrong credentials"})
    } else {
      res.json(user)
    }
  } catch (e) {
    res.status(500).json({msg: e.toString()})
  }
})

router.post("/create", async (req, res) => {
  console.log(req.body);
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(500).json({msg: "missing params"})
    }
    const user = new User({username, password});
    await user.save();
    res.json({msg: "success"})
  } catch (e) {
    res.status(500).json({msg: e.toString()})
  }
})

router.get("/about", function(req, res) {
  res.send("About this wiki");
});

export default router;
