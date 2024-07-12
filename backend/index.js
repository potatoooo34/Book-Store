import express from "express";
import { PORT, mongodburl } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookmodel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";


const app = express();
app.use(cors());
// app.use(
//     cors({
//         origin : 'http://localhost:3000',
//         methods :['GET' , 'POST' , 'PUT' , 'DELETE'],
//         allowedHeaders :['Content-Type'],
//     })
// );


app.use(express.json());

app.get('/'  , (request , response) => {
    console.log(request);
    return response.status(234).send("Welcome to hi");
});

app.use('/books' , booksRoute);
mongoose
    .connect(mongodburl)

    .then(() => {
        console.log('app connected');
        app.listen(PORT , () => {
            console.log(`Server  hello is  at: ${PORT}` );
        })
    })

    .catch((error) =>{
        console.log(error);
    })
