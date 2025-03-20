import express from "express";
import authroutes from './routes/auth.routes.js'

const app = express();

app.use('/api/auth/', authroutes)

app.listen(5000, () => {
    console.log(`server is running at http://localhost:5000`);
});

