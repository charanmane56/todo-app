const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const connectMongodb = require('./init/mongoDb');
const todoRoute = require('./routes/todo');
const dotenv = require('dotenv')

dotenv.config();


// inistialize express app

const app = express();

// connect to mongodb
connectMongodb();

//set the view engine to ejs

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use("/", todoRoute);
 
module.exports = app;
