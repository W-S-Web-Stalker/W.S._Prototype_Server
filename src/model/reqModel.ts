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

//Class Definition
export class ScrapReq {
    private readonly url:string;
    private readonly xPath:string;
    private readonly searchFor:string;

    constructor(url:string, xPath:string, searchFor:string) {
        this.url = url;
        this.xPath = xPath;
        this.searchFor = searchFor;
    }

    public getUrl(){
        return this.url;
    }

    public getXPath(){
        return this.xPath;
    }

    public getSearchFor(){
        return this.searchFor;
    }

}
