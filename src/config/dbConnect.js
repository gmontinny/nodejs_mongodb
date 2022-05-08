import mongoose from "mongoose";

mongoose.connect("mongodb+srv://teste:1203@teste.ubdru.mongodb.net/teste-node");

let db = mongoose.connection;

export default db;
