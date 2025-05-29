import mongoose, { Schema, Document } from "mongoose";
import { IUser } from "../interfaces/Iuser";

const userSchema: Schema = new Schema<IUser>({
  username: { type: String, required: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role:     { type: String, enum: ["admin", "student"], required: true },
});

export const UserModel = mongoose.model<IUser & Document>("User", userSchema);
