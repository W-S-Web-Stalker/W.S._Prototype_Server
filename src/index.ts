//====================================
//index.ts
/*
Typescript Index File: Code Starts here.
Type "npm start" to start the server
*/
//====================================

//Imports
import app from './routes/route'
import express from "express";

//Set body-parser for JSON - req.body can read JSON body.
app.use(express.json());

//Listen in localhost 3000
app.listen(3000, () => console.log("http://localhost:3000"));
