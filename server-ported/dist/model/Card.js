"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_history_1 = __importDefault(require("mongoose-history"));
const Schema = mongoose_1.default.Schema;
const Card = new Schema({
    name: {
        type: String
    },
    question: {
        type: String
    },
    answer: {
        type: String
    },
    topic: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'topic'
    }
});
Card.plugin(mongoose_history_1.default);
exports.default = mongoose_1.default.model("card", Card);
