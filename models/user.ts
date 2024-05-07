import mongoose from "mongoose";

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

export const users = mongoose.models.User || mongoose.model("User", schema);
