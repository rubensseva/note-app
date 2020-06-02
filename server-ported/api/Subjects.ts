const express = require("express");

const router = express.Router();

import Subject from '../model/Subject';
import User from '../model/User';

router.get("/", (req, res) => {
  res.send("usercontent api");
});

router.post("/addSubject", async (req, res) => {
  try {
    const { name, userName } = req.body;
    const user = await User.findOne({name: userName})
    if (!user) {
      return res.status(500).json({msg: "user not found"})
    }
    const subject = new Subject({ owner: user._id, name})
    await subject.save();
    res.json(subject);
  } catch (e) {
    res.status(500).json({msg: e.toString()})
  }
});

router.get("/about", function(req, res) {
  res.send("About this wiki");
});

export default router;
