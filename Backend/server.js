import express from "express";
import authroutes from './routes/auth.routes.js'
import dotenv from "dotenv";
import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use('/api/auth/', authroutes)

app.listen(PORT, () => {
    connectMongoDB();
    console.log(`server is running at http://localhost:${PORT}`);
});

