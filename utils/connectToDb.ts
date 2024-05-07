import mongoose from "mongoose";

export function connectToDb() {
  if (mongoose.connections[0].readyState) {
    return false;
  }
  mongoose.connect(
    "mongodb+srv://bahaminwp:bahamin1364@bahamincluster.zht7zml.mongodb.net/user-auth"
  );
}
