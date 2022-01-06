const express = require("express");
const app = express();
const connectionWithDb = require("./db");

connectionWithDb();
app.use(express.json());
const port =  4500;

app.use('/api/user', require('./auths/RegisterUser'))
app.use('/api/login', require('./auths/CheckUser'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port,()=>{
    console.log("Listening to port " + port)
})