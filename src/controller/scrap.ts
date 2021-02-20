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
        this.scrapTarget(req.getUrl(),req.getXPath())
            .then(() => {
                console.log("Operation Done");
            })
    }

    private async scrapTarget(url:string, xPath:string){
        /*
        * Test: Retrieve Search Result in naver
        * url = www.naver.com
        * xPath = a h3
        * input[class="gLFyf gsfi"] = search box
        * String.fromCharCode(13) = Enter Key
        */
        //console.log(url,xPath);
        const browser: puppeteer.Browser = await puppeteer.launch();
        const page: puppeteer.Page = await browser.newPage();

        await page.goto(url); //Go to the dedicated url
        await page.type("input[class=\"gLFyf gsfi\"]","Puppeteer");//Type 'Puppeteer' at the search box
        //Test Purpose: Need to find type of it.
        // @ts-ignore
        await page.type("input[class=\"gLFyf gsfi\"]",String.fromCharCode(13));//Input "Enter Key"

        await page.waitForSelector(xPath)
            .catch(error => {
                console.log(error);
            }); //Wait for the element shows

        const texts = await page.evaluate(() => {
            return Array.from(document.querySelectorAll(xPath)).map(h3 => (h3.textContent));
        }).catch(error => {
            console.log(error.stackTrace);
        });

        await page.screenshot({path: '../../screenshot.png'});

        //console.log(texts);
        if(texts !== undefined){
            console.log("Start!");
            console.log(texts.join("\n"));
        }

        await browser.close();
    }
}