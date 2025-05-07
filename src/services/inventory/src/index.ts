import express from "express";
import { config } from "dotenv";

import { createInventory } from "./controllers";

const app = express();
config();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.post('/inventory', createInventory);
app.get('/', (req, res) => {
    res.status(200).send('Hello Postman');
});

app.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT}`);
});