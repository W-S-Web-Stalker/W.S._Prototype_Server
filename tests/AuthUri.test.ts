import {FacebookOAuth} from "../src/controller/FacebookOAuth";

describe("Check Auth URl",() => {
    it("should be return authenticated url", (done) => {
        const OAuth:FacebookOAuth = new FacebookOAuth();
        const authUri:string = OAuth.generateAuthUri();

        if(authUri){
            console.log(authUri);
            done();
        }
    })
})