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

//Endpoint "/"
//Main page for testing purpose.
app.get("/",(req:express.Request,res:express.Response) => {
    res.send("This is the main page");
});

//User Request uses request Router; definitions are declared at userRequest.ts
app.use("/req",reqRouter);

export default app;




