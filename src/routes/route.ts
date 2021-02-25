//====================================
//route.ts
/*
Declaration about endpoints using express.
Managing GET and POST Http Requests.
*/
//====================================

//Imports
import express from 'express';
import reqRouter from "./requestRouter";
import authRouter from "./authRouter";

//Code Starts Here
const router:express.Router = express.Router();

//Endpoint "/"
//Main page for testing purpose.
router.get("/",(req:express.Request,res:express.Response) => {
    res.send("This is the main page");
});

//User Request uses request Router; definitions are declared at requestRouter.ts
router.use("/req",reqRouter);

//Authentication uses auth Router; definitions are declared at authRouter.ts
router.use("/auth",authRouter);

export default router;




