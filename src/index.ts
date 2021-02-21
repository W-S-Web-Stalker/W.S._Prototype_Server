//====================================
//index.ts
/*
Typescript Index File: Code Starts here.
Type "npm start" to start the server
*/
//====================================

//Imports
import app from './routes/route'
import App from './model/app'
import express from "express";

//Code Starts Here
const application:express.Application = new App().application;

application.use("/",app);

//Listen in localhost 3000
app.listen(3000, () => console.log("http://localhost:3000"));
