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

//Code starts Here
const app:express.Application = new App().application;

//Set body-parser for JSON - req.body can read JSON body.
app.use(express.json());

//Set Main Router
app.use("/",router);

//Listen in localhost 3000
app.listen(3000, () => console.log("https://localhost:3000"));