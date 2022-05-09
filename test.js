require('dotenv').config(); //=> https://www.npmjs.com/package/dotenv

    const express = require('express'); //=> https://www.npmjs.com/package/express

    const path = require('path'); //=> https://www.npmjs.com/package/path

/*
Server definition
*/
    class ServerClass{
        // Inject properties in the ServerClass
        constructor(){
            this.server = express();
            process.env.NODE_ENV = 'development';
            this.port = process.env.NODE_ENV.PORT;
        }

        init(){
            this.server.use( (req, res, next) => {
                const allowedOrigins = process.env.ALLOWED_ORIGINS.split(', ');
                const origin = req.headers.origin;
                if(allowedOrigins.indexOf(origin) > -1){ res.setHeader('Access-Control-Allow-Origin', origin)}
                res.header('Access-Control-Allow-Credentials', true);
                res.header('Access-Control-Allow-Methods', ['GET', 'PUT', 'POST', 'DELETE']);
                res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
                next();
            });
            this.config();
        }

        config(){
            const ApiRouterClass = require('./router/api.router');
            const apiRouter = new ApiRouterClass();
            this.server.use('/api', apiRouter.init());

            this.server.use('/user', apiRouter.init());
            
            // Set up API router
            


            
            this.launch();
        }

        launch(){
          this.server.listen( this.port, () => {
            console.log(`Example app listening at http://localhost:${this.port}`)
          })
        }
    }
//


/*
Start server
*/
    const MyServer = new ServerClass();
    MyServer.init();
//