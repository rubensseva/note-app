const mongoose = require('mongoose');
var express = require("express");
var router = express.Router();

import Topic from '../model/Topic';

router.get("/", async (req, res) => {
  try {
    const { userId } = req.query;
    if (!userId) {
      return res.status(500).json({msg: "missing userId for owner"});
    }
    const topics = await Topic.find({ owner: mongoose.Types.ObjectId(userId) })
    /* const topics = await Topic.find() */
    console.log(topics);
    console.log(userId);
    console.log(mongoose.Types.ObjectId(userId));
    res.json(topics);
  } catch (e) {
    console.log(e);
    res.status(500).json({msg: e.toString()})
  }
})

router.post("/addTopic", async (req, res) => {
  try {
    console.log(req.body)
    const { name, description, userId } = req.body;
    const topic = new Topic({name, description, owner: userId})
    await topic.save()
    res.json({msg: "success"})
  } catch(e) {
    console.log(e);
    res.status(500).json({msg: e.toString()})
  }
});

export default router;
