//====================================
//credentials.ts
/*
Get Client Credential Information to use Facebook Service.
Raw Credential Files are hidden (not uploaded at git repository)
*/
//====================================

//Imports
import creds from '../../credentials/credentials.json';

//Class Definition: Credentials - It extracts client info.
export default class Credentials{
    public getClientId():string{
        return creds.client_id;
    }
}