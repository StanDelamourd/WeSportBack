/*
Imports
*/
// Node
    var config = require('../test.json') 
    const express = require('express');
    const controller = require("../controller/auth.controller");

/*
Defintiion
*/
    class RouterClass{
        constructor(){
            this.router = express.Router();
        }

        routes(){
            app.post('/signup', (req, res) => {
                controller.signup(req,res)
  
              })
        }
        

        init(){
            this.routes();
            return this.router;
        }
    }

//

/*
Export
*/
    module.exports = RouterClass;
//