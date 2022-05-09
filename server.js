const express= require('express');
const cors = require('cors');
const db = require('./models/index.js');
const Role = db.role;
require('dotenv').config();
const app = express();
var corsOptions = {
    origin: "http://localhost:3001"
};	
// routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "admin"
  });
}
db.sequelize.sync({force: true}).then(() => {
        console.log('Drop and Resync Db');
        initial();
      });
      
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Wesport." });
});
//server
app.listen(process.env.PORT, () =>{
    console.log(`Server is running on port ${process.env.PORT}`);
})
