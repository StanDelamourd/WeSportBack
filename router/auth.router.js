const express = require('express');
const Controller = require('../controller/user.controller');

class RouterClass{
    constructor(){
        this.router = express.Router();
    }

    routes(){
        this.router.post('/auth', (req, res) => {
            console.log("Hello");
            Controller.signup(req,res)
        })
        this.router.post('/login', (req, res) => {
            Controller.login(req,res)
        })
    }

    init(){
        this.routes();
        return this.router;
    }
}
module.exports = RouterClass;