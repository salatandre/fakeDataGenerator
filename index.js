const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const generator = require('./dataGen')

app.use(cors());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(bodyParser.json());

generator.dataGen();

app.listen(3001)