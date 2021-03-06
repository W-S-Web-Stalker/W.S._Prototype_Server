//====================================
//Cookie.ts
/*
Class for managing web cookie.
*/
//====================================

//Imports
import express from "express";

//Class Declaration Starts Here
export default class Cookie{

    //Set Cookie
    async setCookie(res:express.Response,key:string, value:string){
        await res.cookie(key,value);
    }

    //Get Cookie Data

    getCookie(req:express.Request, key:string):string{
        return req.cookies[key];
    }
}