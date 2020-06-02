var express = require("express");
var router = express.Router();

import Topic from '../model/Topic';

router.get("/", async (req, res) => {
  try {
    const topics = await Topic.find()
    res.json(topics);
  } catch (e) {
    res.status(500).json({msg: e.toString()})
  }
})

router.post("/addTopic", async (req, res) => {
  try {
    const { name, description, userId } = req.body;
    const topic = new Topic({name, description, owner: userId})
    await topic.save()
    res.json({msg: "success"})
  } catch(e) {
    res.status(500).json({msg: e.toString()})
  }
});

export default router;
