//====================================
//app.ts
/*
Definition of class 'App'.
App uses for setting endpoints, and open port for listen requests.
*/
//====================================

import express from "express";

class App {
    public application: express.Application;

    constructor() {
        this.application = express();
    }
}

export default App;