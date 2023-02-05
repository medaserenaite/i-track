import { Router } from "express"
import { surgical_instruments } from "../../data";
import asyncHandler from 'express-async-handler'
import { InstrumentModel } from "../models/instrument.model";

const router = Router();

router.get("/seed", asyncHandler(
    async (req, res) => {
        const instrumentCount = await InstrumentModel.countDocuments();
        if(instrumentCount>0){
            res.send("seed is done?")
            return
        }

        await InstrumentModel.create(surgical_instruments)
        res.send("seed is done?")
    }
))

router.get("/", asyncHandler(
async (req, res) => {
    const instruments = await InstrumentModel.find();
    console.log(instruments)
    res.send(instruments)
}))

export default router;