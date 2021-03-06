//====================================
//authRouter.ts
/*
Declaration for router specialized for Facebook OAuth.
*/
//====================================

//Imports

import express from 'express';
import Cookie from "../controller/Cookie";
//Code Starts From Here
const router:express.Router = express.Router();
const cookieHandler:Cookie = new Cookie();

router.get("/redirect",(req:express.Request, res:express.Response) => {
    //res.send("Redirecting...");
    //Save Access Token at web server cookie.
    const accessToken = req.query.code;
    //console.log("ACCESS TOKEN: ", accessToken);

    if(typeof accessToken === 'string'){
        cookieHandler.setCookie(res,"access_token",accessToken)
            .then(() => {
                //res.send("Redirecting...");
                res.redirect("https://localhost:3000");
            });
    }

    //res.redirect("https://localhost:3000");
});


export default router;