import mongoose from "mongoose";
const Reserved = require("./reserved");

const schema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    forgotPasswordLink: {
      type: String,
    },
    forgotPasswordTime: {
      type: Number,
    },
    verifyEmailCode: {
      type: Number,
    },
    verifyEmailTime: {
      type: Number,
    },
    isVerifyEmail: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

schema.virtual("tickets", {
  ref: "Reserved",
  localField: "_id",
  foreignField: "userId",
});

export const users = mongoose.models.User || mongoose.model("User", schema);
