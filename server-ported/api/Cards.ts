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

router.post("/deleteCard", (req, res) => {
  try {
    const { cardId } = req.body;
    Card.deleteOne({_id: cardId})
  } catch (e) {
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
    res.status(500).json({msg: e.toString()})
  }
});

router.post("/getCardById", async (req, res) => {
  try {
    const { cardId } = req.body;
    const card = await Card.findById(cardId)
    res.json(card);
  } catch (e) {
    res.status(500).json({msg: e.toString()})
  }
});

router.post("/updateCardById", (req, res) => {
  try {
    const { name, question, answer, cardId } = req.body
    const updatedCard = Card.updateOne({_id: cardId}, { $set: {name, question, answer}})
    res.json(updatedCard);
  } catch (e) {
    res.status(500).json({msg: e.toString()})
  }
});

export default router;
