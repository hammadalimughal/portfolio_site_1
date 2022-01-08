const express = require("express");
const app = express();
const connectionWithDb = require("./db");

connectionWithDb();
app.use(express.json());
const port =  4500;

// user routes 
app.use('/api/user', require('./auths/user/RegisterUser'))
app.use('/api/user', require('./auths/user/CheckUser'))
app.use('/api/user', require('./auths/user/GetUser'))

// notes routes 
app.use('/api/notes', require('./auths/notes/AddNotes'))


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port,()=>{
    console.log("Listening to port " + port)
})