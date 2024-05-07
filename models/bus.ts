const mongoose = require("mongoose");
const reserved = require("./reserved");

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    time: {
      type: String,
    },
    seatType: {
      type: String,
    },
    from: {
      type: String,
    },
    to: {
      type: String,
    },
    price: {
      type: Number,
    },
    reserved: {
      type: mongoose.Types.ObjectId,
      ref: "Reserved",
    },
  },
  {
    timestamps: true,
  }
);

export const buses = mongoose.models.Bus || mongoose.model("Bus", schema);
