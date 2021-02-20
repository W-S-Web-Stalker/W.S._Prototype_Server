//====================================
//route.ts
/*
Declaration about endpoints using express.
Managing GET and POST Http Requests.
*/
//====================================

//Imports
import express from 'express';
import reqRouter from './userRequest';
import App from "../model/app"

//Code Starts Here
const app:express.Application = new App().application;

//Set body-parser for JSON - req.body can read JSON body.
app.use(express.json());

//Endpoint "/"
//Main page for testing purpose.
app.get("/",(req:express.Request,res:express.Response) => {
    res.send("This is the main page");
});

//User Request uses request Router; definitions are declared at userRequest.ts
app.use("/req",reqRouter);

//Listen in localhost 3000
app.listen(3000, () => console.log("http://localhost:3000"));

