const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { ObjectID } = require('mongodb');

var id='1234';

if(!ObjectID.isValid(id)) {
    console.log('Id not valid');
}

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todos) => {
    console.log('Todos find one', todos);
});

Todo.findById(id).then((todo) => {
    if(!todo) {
        return console.log('Id not found');
    }
    console.log('Todos by id', todo);
}).catch((err) => console.log(err));