const { getFilms } = require('./db.js');
const { urlencoded } = require('body-parser');
const { json } = require('body-parser');
const cors = require('cors');
const express = require('express');



var app = express();

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use(json())
app.use(urlencoded({
    extended: true
}));

app.get('/getFilms/', async function(request, result){
    result.json(await getFilms())
})



app.listen(process.env.PORT || 8080);

console.log(8080)