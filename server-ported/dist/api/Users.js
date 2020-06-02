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
const router = express_1.default.Router();
const User_1 = __importDefault(require("../model/User"));
router.get("/", (req, res) => {
    res.send("user api");
});
router.post("/loginUser", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, password } = req.body;
        const user = yield User_1.default.findOne({ username: name, password });
        if (!user) {
            res.status(404).json({ msg: "wrong credentials" });
        }
        else {
            res.json({ msg: "success" });
        }
    }
    catch (e) {
        res.status(500).json({ msg: e.toString() });
    }
}));
router.post("/create", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(500).json({ msg: "missing params" });
        }
        const user = new User_1.default({ username, password });
        yield user.save();
        res.json({ msg: "success" });
    }
    catch (e) {
        res.status(500).json({ msg: e.toString() });
    }
}));
router.get("/about", function (req, res) {
    res.send("About this wiki");
});
exports.default = router;
