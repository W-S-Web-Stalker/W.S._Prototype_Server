//====================================
//scrap.ts
/*
Controller - scrap data for requested target.
*/
//====================================

//Imports
import puppeteer from 'puppeteer';
import { ScrapReq } from '../model/reqModel';

export class Scrapper{

    public receiveTarget(req:ScrapReq){
        this.scrapTarget(req.getUrl(),req.getXPath(), req.getSearchFor())
            .then(() => {
                console.log("Operation Done");
            })
    }

    private async scrapTarget(url:string, xPath:string, searchFor:string){
        /*
        * Test: Retrieve Search Result in Google
        * url = www.google.com
        * xPath = a h3
        * input[class="gLFyf gsfi"] = search box
        * String.fromCharCode(13) = Enter Key
        */
        //console.log(url,xPath);
        let fileName:string = new Date().getTime().toString() + '.png'; //filename: currentTimeMils

        const browser: puppeteer.Browser = await puppeteer.launch();
        const page: puppeteer.Page = await browser.newPage();
        console.log("Browser Opened, New Page Created")
        await page.goto(url); //Go to the dedicated url
        await page.type("input[class=\"gLFyf gsfi\"]",searchFor);//Type 'Puppeteer' at the search box
        //Test Purpose: Need to find type of it.
        console.log("Typed target keyword");
        console.log(xPath);

        // @ts-ignore
        await page.type("input[class=\"gLFyf gsfi\"]",String.fromCharCode(13));//Input "Enter Key"
        console.log("Searching...")

        await page.waitForSelector(xPath)
            .catch(error => {
                console.log(error);
            }); //Wait for the element shows
        console.log("Loaded!")

        const texts = await page.evaluate((xPath) => {
            return Array.from(document.querySelectorAll(xPath),h3 => h3.textContent);
        }, xPath)
            .catch(error => {
            console.log("ERROR FROM EVALUATE FUNC: " + error);
        });

        //console.log(texts);
        if(texts !== undefined){
            console.log("Start!");
            console.log(texts);
        }

        await page.screenshot({path: './screenshots/' + fileName});

        await browser.close();
    }
}