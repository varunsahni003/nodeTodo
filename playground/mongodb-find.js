// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log("Unable to connect to mongodb server");
    }
    console.log('Connected to MongoDB server');

        // Find all
    db.collection('Todos').find().toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch data', err)
    });
        // Find with object id
    db.collection('Todos').find({
        _id: new ObjectID('12345678')
    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch data', err)
    });
    // Find with object id
    db.collection('Todos').find().count().then((count) => {
        console.log('Todos count: ${count}');
        console.log(JSON.stringify(count, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch data', err)
    });

    // client.close();
});