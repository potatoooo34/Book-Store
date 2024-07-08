import express from "express";
import {PORT , mongodburl} from "./config.js";
import mongoose from "mongoose";
import {Book} from "./models/bookmodel.js";

const app = express();

app.get('/'  , (request , response) => {
    console.log(request);
    return response.status(234).send("Welcome to hi");
})


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
