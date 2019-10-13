// CRUD create read update delete

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID
// Далее произведена деструктуризация объекта

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';



MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName);
    // db.collection('users').insertOne({
    //     name: 'Bob',
    //     age: 80
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28
    //     },
    //     {
    //         name: 'Gunther',
    //         age: 25
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })
    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Walking',
    //         completed: true,
    //         timeStart: '11:00'
    //     },
    //     {
    //         description: 'Playing game',
    //         completed: false,
    //         timeStart: '21:00'
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Something go wrong! Lets try again...')
    //     }
    //     console.log(result.ops)
    // })


    // db.collection('users').findOne({ _id: new ObjectID('5d9330bb514bdc33a819490b') }, (error, user) => {
    //     if (error) {
    //         return console.log('Something go wrong! Lets try again...')
    //     }
    //     if (user) {
    //         return console.log(user)
    //     }
    //     console.log('User with this parameters not found... Please try another')

    // })

    // db.collection('users').find({ age: 27 }, { limit: 2 }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({ age: 27 }).count((error, count) => {
    //     console.log(count)
    // })


    // db.collection('tasks').findOne({ _id: new ObjectID('5d932eed4f914e2e08cd0b31') }, (error, user) => {
    //     if (error) {
    //         return console.log('Something go wrong! Lets try again...')
    //     }
    //     if (user) {
    //         return console.log(user)
    //     }
    //     console.log('User with this parameters not found... Please try another')

    // })

    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     console.log(tasks)
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID('5d930c96fd4b200244d8e343')
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: Boolean
    // }, {
    //     $set: { completed: true }
    // }
    // ).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })


    db.collection('tasks').deleteOne({
        _id: new ObjectID('5d932eed4f914e2e08cd0b31')
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })


})