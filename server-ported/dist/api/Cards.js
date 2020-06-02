"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Card_1 = __importDefault(require("../model/Card"));
const router = express_1.default.Router();
router.post("/addCardToTopic", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, question, answer, topicId } = req.body;
        const card = new Card_1.default({ name, question, answer, topicId });
        yield card.save();
        res.json({ msg: 'success' });
    }
    catch (e) {
        res.status(500).json({ msg: e.toString() });
    }
}));
router.post("/deleteCard", (req, res) => {
    try {
        const { cardId } = req.body;
        Card_1.default.deleteOne({ _id: cardId });
    }
    catch (e) {
        res.status(500).json({ msg: e.toString() });
    }
});
router.post("/getCardsByUserTopic", (req, res) => {
    console.log("fetching user cards by topic id. Printing cookies then body");
    res.json({ msg: "not implemented yet" });
});
router.post("/getCardById", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cardId } = req.body;
        const card = yield Card_1.default.findById(cardId);
        res.json(card);
    }
    catch (e) {
        res.status(500).json({ msg: e.toString() });
    }
}));
router.post("/updateCardById", (req, res) => {
    try {
        const { name, question, answer, cardId } = req.body;
        const updatedCard = Card_1.default.updateOne({ _id: cardId }, { $set: { name, question, answer } });
        res.json(updatedCard);
    }
    catch (e) {
        res.status(500).json({ msg: e.toString() });
    }
});
exports.default = router;
