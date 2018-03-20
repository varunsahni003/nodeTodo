// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// var obj = new ObjectID(); // creating new Instance of object id
// console.log(obj);

// Destructuring objects and taking out values from it
// var user = {name: 'tamatar', age: 15};
// var {name} = user;
// console.log(name);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log("Unable to connect to mongodb server");
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    // db.collection('Todos').insertOne({
    //     'text': 'Something to do',
    //     completed: false
    // },(err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        'name': 'Mysterious',
        'age': 1105,
        'location': 'find out'
    },(err, result) => {
        if(err) {
            return console.log('Unable to insert user', err);
        }

        console.log(result.ops[0]._id);
        console.log(result.ops[0]._id.getTimestamp());
    });

    client.close();
});