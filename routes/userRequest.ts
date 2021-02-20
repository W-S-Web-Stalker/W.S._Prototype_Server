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

router.post("/",(req:express.Request, res: express.Response) => {
    //Incoming Request Body
    /*
    {
        "url":"www.example.com",
        "xpath":"example xpath"
    }
    */
    const url: string = req.body.url;
    const xPath: string = req.body.xpath;


})

export default router;