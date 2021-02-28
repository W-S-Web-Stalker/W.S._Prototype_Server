//====================================
//FacebookOAuth.ts
/*
Proceeding OAuth Process, returning access token to use Facebook API
*/
//====================================

//Imports
import EnvVerifier from '../model/EnvVerifier'
import dotenv from 'dotenv';

//Path Declaration
const path = 'src/config/.env';
dotenv.config({path:path});

//Class - Generate Auth Uri.
class AuthUriGenerator{
    /*
    * Auth Uri Format:
    https://www.facebook.com/v10.0/dialog/oauth?
        client_id={app-id}
        &redirect_uri={redirect-uri}
        &state={state-param}
    */
    getAuthUri(host:string, endpoint:string, clientId:string, redirect:string, state:string):string {
        return this.addParams(this.setUri(host,endpoint),clientId,redirect,state);
    }

    //Set uri - host and endpoint
    setUri(host:string, endpoint:string):string{
        return host.concat(endpoint);
    }

    //Add required parameters to uri.
    addParams(uri:string, ...params:string[]):string{
        params.forEach((param) => {
            //Attach parameters
            uri = uri.concat(param,"&");
        })
        //The last & have to be omitted.
        uri = uri.slice(0,-1);

        return uri;
    }
}

export class FacebookOAuth{
    public generateAuthUri():string{
        const env:EnvVerifier = new EnvVerifier();
        const Auth:AuthUriGenerator = new AuthUriGenerator();

        return Auth.getAuthUri(
            env.verify(process.env.HOST),
            env.verify(process.env.ENDPOINT),
            "client_id=" + env.verify(process.env.CLIENT_ID),
            "redirect_uri=" + env.verify(process.env.REDIRECT),
            "state=" + env.verify(process.env.STATE)
        );
    }
}

