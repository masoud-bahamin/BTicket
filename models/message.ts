const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

export const Messages =
  mongoose.models.Message || mongoose.model("Message", schema);
