//====================================
//index.ts
/*
Typescript Index File: Code Starts here.
Type "npm start" to start the server
*/
//====================================

//Imports
import express from "express";
import App from "./model/app";
import router from "./routes/route"
import * as fs from "fs";
import EnvVerifier from "./model/EnvVerifier";
import * as https from "https";
import dotenv from 'dotenv';

//Path Declaration
const path = 'src/config/.env';
dotenv.config({path});
//Verifier
const env:EnvVerifier = new EnvVerifier();

//Reads Key and Certificate file
let option = {
    key: fs.readFileSync('./src/private/key.pem'),
    cert: fs.readFileSync('./src/private/cert.pem'),
    passphrase: env.verify(process.env.PASSPHRASE),
    agent:false
};


//Code starts Here
const app:express.Application = new App().application;

//Set body-parser for JSON - req.body can read JSON body.
app.use(express.json());

//Set Main Router
app.use("/",router);

//Listen in localhost 3000
//app.listen(3000, () => console.log("https://localhost:3000"));

//Listen in localhost 3000 with https protocol
https.createServer(option,app).listen(3000, () => {
    console.log("https://localhost:3000");
})