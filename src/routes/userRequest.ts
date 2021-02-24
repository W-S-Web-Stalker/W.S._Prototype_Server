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
import { ScrapReq } from "../model/reqModel";
import { Scrapper } from "../controller/scrap";

//Code Starts Here
const router: express.Router = express.Router();
const scrapper = new Scrapper();

router.post("/",(req: express.Request, res: express.Response) => {
    //Incoming Request Body
    /*
    {
        "url":"www.example.com",
        "xpath":"example xpath",
        "searchFor":"searching target"
    }
    */
    //console.log(req.body.url,req.body.xPath);
    const scrap:ScrapReq = new ScrapReq(req.body.url,req.body.xPath, req.body.searchFor);
    scrapper.receiveTarget(scrap);
    res.send("Done!");
})

export default router;