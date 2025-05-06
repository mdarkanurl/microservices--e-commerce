"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const app = (0, express_1.default)();
(0, dotenv_1.config)();
app.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT}`);
});
