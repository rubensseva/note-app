import express from "express";

import mongoose from 'mongoose';

import Card from '../model/Card';

const router = express.Router();

router.post("/addCardToTopic", async (req, res) => {
  try {
    const { name, question, answer, topicId } = req.body;
    if (!name || !question || !answer || !topicId) {
      res.status(500).json({msg: "missing data", receivedBody: req.body })
    }
    const card = new Card({name, question, answer, topic: mongoose.Types.ObjectId(topicId)})
    await card.save();
    res.json({msg: 'success'})
  } catch (e) {
    res.status(500).json({msg: e.toString()})
  }
});

router.post("/deleteCard", async (req, res) => {
  try {
    console.log('deleting card');
    console.log(req.body);
    const { cardId } = req.body;
    await Card.deleteOne({_id: cardId})
    res.json({msg: "success"});
    console.log('deleted');
  } catch (e) {
    console.log(e);
    res.status(500).json({msg: e.toString()})
  }
});

router.post("/getCardsByUserTopic", async (req, res) => {
  try {
    console.log("fetching user cards by topic id. Printing cookies then body");
    const { topicId } = req.body;
    const cards = await Card.find({topic: mongoose.Types.ObjectId(topicId)})
    res.json(cards);
  } catch (e) {
    console.log(e)
    res.status(500).json({msg: e.toString()})
  }
});

router.post("/getCardById", async (req, res) => {
  try {
    const { cardId } = req.body;
    const card = await Card.findById(cardId)
    res.json(card);
  } catch (e) {
    console.log(e);
    res.status(500).json({msg: e.toString()});
  }
});

router.post("/updateCardById", async (req, res) => {
  try {
    const { name, question, answer, cardId } = req.body
    const updatedCard = await Card.updateOne({_id: cardId}, { $set: {name, question, answer}})
    res.json(updatedCard);
  } catch (e) {
    console.log(e);
    res.status(500).json({msg: e.toString()});
  }
});

export default router;
