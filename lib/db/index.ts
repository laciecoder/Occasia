import mongoose from "mongoose";

const URI = process.env.MONGODB_URI;

if (!URI) throw new Error("DB URI is missing");

// ts typecast
let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;
  cached.promise =
    cached.promise ||
    mongoose.connect(URI, {
      dbName: "occasia",
      bufferCommands: false,
    });
  cached.conn = await cached.promise;
  return cached.conn;
};
