"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const express = require("express");
const path = require("path");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const Users_1 = __importDefault(require("./api/Users"));
const Subjects_1 = __importDefault(require("./api/Subjects"));
const Topics_1 = __importDefault(require("./api/Topics"));
const Cards_1 = __importDefault(require("./api/Cards"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/user", Users_1.default);
app.use("/api/subjects", Subjects_1.default);
app.use("/api/topics", Topics_1.default);
app.use("/api/cards", Cards_1.default);
var uri = "mongodb://localhost:27017/note-app-test";
mongoose_1.default.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
const connection = mongoose_1.default.connection;
connection.once("open", function () {
    console.log("MongoDB database connection established successfully");
});
app.get("/test", (req, res) => {
    res.send("welcome!");
});
app.get("/test", (req, res) => {
    res.send("welcome!");
});
console.log(__dirname);
const port = 5000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
