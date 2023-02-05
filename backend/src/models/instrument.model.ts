import { Schema, model } from "mongoose";

export interface Instrument{
    id:string;
    name:string;
    quantity:number;
    imageUrl: string;
}

export const InstrumentSchema = new Schema<Instrument>(
    {
        name: { type: String, required: true},
        quantity: { type: Number },
        imageUrl: { type: String }
 
    },{
        toJSON:{
            virtuals: true
        },
        toObject:{
            virtuals: true
        },
        timestamps: true
    }
)

export const InstrumentModel = model<Instrument>('instrument', InstrumentSchema)