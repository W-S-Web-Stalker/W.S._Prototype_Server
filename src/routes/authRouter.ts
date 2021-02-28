//====================================
//authRouter.ts
/*
Declaration for router specialized for Facebook OAuth.
*/
//====================================

//Imports

import express from 'express';
//Code Starts From Here
const router:express.Router = express.Router();

router.get("/redirect",(req:express.Request, res:express.Response) => {
    res.send("Redirecting...");
    //TODO: Facebook OAuth
    const accessToken = req.query.code;

    if(accessToken){
        console.log("ACCESS TOKEN:", accessToken)
    }
})

export default router;