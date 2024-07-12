import dotenv from 'dotenv';
import express from "express";
//import { PORT } from "./config.js";
import mongoose from "mongoose";

import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

dotenv.config();
const PORT = process.end.PORT || 5555;
const app = express();
app.use(cors());


app.use(express.json());

app.get('/'  , (request , response) => {
    console.log(request);
    return response.status(234).send("Welcome to hi");
});

app.use('/books' , booksRoute);
mongoose
    .connect(process.env.MONGODB_URL)

    .then(() => {
        console.log('app connected');
        app.listen(PORT , () => {
            console.log(`Server  hello is  at: ${PORT}` );
        })
    })

    .catch((error) =>{
        console.log(error);
    })
