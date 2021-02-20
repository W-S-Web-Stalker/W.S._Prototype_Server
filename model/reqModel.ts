//====================================
//reqModel.ts
/*
Definition of class 'ScrapReq'.
ScrapReq contains parameters of post request for scrapping contents in xpath of current url.
Post Request will be like this.

POST /req HTTP/1.1
Host: http://localhost:3000
Content-Type: application/json

{
    "url":"www.example.com",
    "xpath":"example xpath"
}
*/
//====================================

class ScrapReq {
    private readonly url:string;
    private readonly xPath:string;

    constructor(url:string, xPath:string) {
        this.url = url;
        this.xPath = xPath;
    }

    public getUrl(){
        return this.url;
    }

    public getXPath(){
        return this.xPath;
    }

}