var mongoose = require('mongoose')
    , Todo = require('../models/todo.js');

module.exports.getAll = function(req, res){
    Todo.find({},function(err, todo){
        if(err){
            console.log(err.message);
            res.send('An error ocurred when searching "todos"');
        }else{
            res.json(todo);
        }
    });
}

module.exports.getById = function(req, res){
    Todo.findById(req.params.id, function(err, todo){
        if(err){
            console.log(err.message);
            res.send('An error ocurred when searching "todo" with id: ' + req.params.id);
        }else{
            console.log(todo);
            res.json(todo);
        }
    });
}

module.exports.postIt = function(req, res){
    try{
        var todo = new Todo({
            text: req.body.text,
            completed:false
        });

        todo.save(function(err){
            if(err){
                console.log(err.message);
                res.send('Error while saving "todo"');
            }else{
                console.log('"todo" saved.');
                res.send('"todo" saved.');
            }
        });
    }catch(e){
        console.log(e.message);
    }
}

module.exports.putIt = function(req, res){
    Todo.findById(req.params.id, function(err, todo){
        if(err){
            console.log(err.message);
            res.send('Error while modifying "todo"');
        }else{
            todo.text = req.body.text;
            todo.completed = req.body.completed;
            todo.save(function(err){
                if(err){
                    console.log(err.message);
                    res.send('Error while puting');
                }else{
                    res.send('The "todo" was modified successfully');
                }
            });
        }
    });
}

module.exports.deleteIt = function(req, res){
    Todo.findById(req.params.id, function(err, todo){
        if(err){
            console.log(err.message);
            res.send('Error while deleting "todo"');
        }else{
            todo.remove(function(err){
                if(err){
                    console.log(err.message);
                    res.send('Error while deleting');
                }else{
                    res.send('The "todo" was deleted');
                }
            });
        }
    });
}
