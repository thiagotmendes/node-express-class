import mongoose from "mongoose";

mongoose.connect( "mongodb+srv://thiagomendes:S0ulhunt3r@nodeexpress.gppysx2.mongodb.net/alura-node" );

let db = mongoose.connection;

export default db;