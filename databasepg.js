const {Client} = require('pg')
const client = new Client({
    host:"postgresql-wesport.alwaysdata.net",
    user: "wesport_free",
    port: 5432,
    password: "shieldeye21",
    database: "wesport_data"
})
client.connect();

client.query('SELECT * FROM auth', (err, res)=>{
    if(!err){
        console.log(res.rows);
    }else{
        console.log(err.message);
    }
    client.end;
})