const mongoose = require("mongoose");
const bus = require("./bus");

const schema = new mongoose.Schema(
  {
    seat: {
      type: [],
      required: true,
    },
    userId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "User",
    },
    busId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "Bus",
    },
  },
  {
    timestamps: true,
  }
);

export const reserved =
  mongoose.models.Reserved || mongoose.model("Reserved", schema);
