import dotenv from 'dotenv'
dotenv.config();

import express from "express";
import cors from "cors"
import { surgical_instruments } from "../data"
import router from './routers/instrument.router'
import { dbConnect } from './configs/database.config';
dbConnect();

const app = express();
app.use(cors({
    credentials: true,
    origin:["http://localhost:4200"]
}))

app.use("/all", router)

const port = 5000;
app.listen(port, () => {
    console.log("Website served on localhost port: " + port)
})