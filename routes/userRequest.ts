//====================================
//userRequest.ts
/*
Declaration for router specialized for user request.
Dedicated jobs:
    - Get user url & XPath request, process a operation.
*/
//====================================

//Imports
import express from 'express';

//Code Starts Here

const router = express.Router();

router.post("/",(req:express.Request, res: express.Request) => {
    console.log("Post Request");
})

export default router;