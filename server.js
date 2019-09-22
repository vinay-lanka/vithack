const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const port = 8000;

app.use(express.static(__dirname + '/public/'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req,res)=>{
    // res.send("helloworld");
    res.sendFile('/public/pages/index.html', {'root': './'});
});

// app.post('/submit',(req,res)=>{
//     console.log(req.body);
//     res.send(req.body);
// });

app.listen(port);