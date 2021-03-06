//====================================
//testRouter.ts
/*
Declaration for route endpoint for testing purpose
*/
//====================================

import express from 'express';
import Cookie from "../controller/Cookie";
import {FacebookOAuth} from "../controller/FacebookOAuth";

const router:express.Router = express.Router();
const cookieHandler:Cookie = new Cookie();

router.get("/testAuth", (req:express.Request, res:express.Response) => {
    const OAuth : FacebookOAuth = new FacebookOAuth();
    res.redirect(OAuth.generateAuthUri());
});

router.get("/testCookie", (req:express.Request, res:express.Response) => {
    //test whether it returns access code from cookie.
    const token:string = cookieHandler.getCookie(req,"access_token");
    console.log("Retrieved Access Token:", token);
    res.send("DONE!");
})

export default router;