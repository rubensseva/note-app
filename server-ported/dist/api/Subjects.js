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
const express = require("express");
const router = express.Router();
const Subject_1 = __importDefault(require("../model/Subject"));
const User_1 = __importDefault(require("../model/User"));
router.get("/", (req, res) => {
    res.send("usercontent api");
});
router.post("/addSubject", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, userName } = req.body;
        const user = yield User_1.default.findOne({ name: userName });
        if (!user) {
            return res.status(500).json({ msg: "user not found" });
        }
        const subject = new Subject_1.default({ owner: user._id, name });
        yield subject.save();
        res.json(subject);
    }
    catch (e) {
        res.status(500).json({ msg: e.toString() });
    }
}));
router.get("/about", function (req, res) {
    res.send("About this wiki");
});
exports.default = router;
