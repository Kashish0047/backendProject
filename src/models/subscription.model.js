import mongoose from "mongoose";

const subscriptionSchema = new Schema({
  subscriber:{ // one who is subscribing
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  channel:{  // to whom users are subscribing
     type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }

},{timestamps: true})

export const subscription = mongoose.model("subscription", subscriptionSchema)