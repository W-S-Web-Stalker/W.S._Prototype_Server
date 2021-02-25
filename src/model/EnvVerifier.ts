//====================================
//EnvVerifier.ts
/*
Get .env value, ensuring it is string type.
*/
//====================================

export default class EnvVerifier{
    verify(value:string|undefined):string{
        if(value){
            return value;
        }
        return "ERROR: VALUE NOT EXISTS."
    }
}