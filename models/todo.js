var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var todoSchema = new Schema({
        text: {type:String, required:true},
        completed: {type:Boolean, required:true}
    });

var Todo = mongoose.model('todo', todoSchema);

module.exports = Todo;