var express = require('express'),
    app = express(),
    bodyParser  = require('body-parser'),
    methodOverride = require('method-override');
    mongoose = require('mongoose'),
    todo_router = require('./routes/todo_router')
    db_connector = require('./db_connector');

const PORT = process.env.PORT||8007;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(methodOverride());

app.use('/todo', todo_router);

app.listen(PORT, function(){
    console.log('Node server running on port:' + PORT);
});