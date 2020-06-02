"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_history_1 = __importDefault(require("mongoose-history"));
const mongoose_unique_validator_1 = __importDefault(require("mongoose-unique-validator"));
const Schema = mongoose_1.default.Schema;
const User = new Schema({
    username: {
        type: String
    },
    password: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    }
});
User.plugin(mongoose_history_1.default);
User.plugin(mongoose_unique_validator_1.default);
exports.default = mongoose_1.default.model("user", User);
