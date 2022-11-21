//building node js server:

const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();

//below:
//app.listen() starts the server.
//can also update json file to run server.js after "npm start"

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname + '/public/index.html'));
  });

app.use(express.static(__dirname + '/public'))
app.use('/', router);
app.use('/images', express.static('images'));

//added middleware to support images in images folder.

const hostname = 'Dariens-MBP';
const port = 8000;

app.listen(process.env.port || port)
console.log(`Running at Port ${port}`);
console.log(__dirname, " <-- this is the dirname")
