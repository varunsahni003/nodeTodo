const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { ObjectID } = require('mongodb');
const { User } = require('./../server/models/user');


            // Removes everything
Todo.remove({}).then((result) => {
    console.log(result);
});

            // Removes the first match only
Todo.findOneAndRemove({_id: '1234'}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('1234').then((todo) => {
    console.log(todo);
});