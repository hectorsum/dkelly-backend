import { Schema, model, Document } from 'mongoose'

const OrderSchema = new Schema({
    customer: {
      type: Schema.Types.ObjectId,
      ref: "customer",
      required: [true, 'customer is required']
    },
    products:[
      {
        _id:{
          type: Schema.Types.ObjectId,
          ref: "product"
        },
        name: {
          type: String,
          required: true
        },
        qty: {
          type: Number,
          required:true
        }
      }
    ],
    hasPaid: {
      type: Boolean,
      required: false,
      default: false
    },
    total: {
      type: Number,
      required: false
    },
    notes: {
      type: String,
      required: false
    },
    date:{
      type:Date,
      default: Date.now,
    }
})

export interface IOrder extends Document {
  customer: string
  products: Array<{_id: string, name: string, qty: number}>
  total: number,
  notes:string
}

export const Order = model<IOrder>('order', OrderSchema)