const express = require('express');
const router = require('./Router');
const bodyParser = require("body-parser");
const server = express();
const cors = require('cors');
// this with product value with req.body
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
cd


const PORT = 3003;
server.listen(PORT,(error)=>{
    if(error)
        {
            console.log(error);
        }
        else
        {
            console.log(`server is running ${PORT}`);
        }
});