// CRUD Operations

// const mongodb= require('mongodb')
// const MongoClient= mongodb.MongoClient
// const ObjectID= mongodb.ObjectID

const {MongoClient,ObjectId}= require('mongodb')

const connectionURL='mongodb://127.0.0.1:27017'
const databaseName='task-manager'

//To generate our own object id
// const id= ObjectId()
// console.log(id.id.length);   to check the length of id --> 12
// // console.log(id.getTimestamp());  to check the timestamp  
// console.log(id.toHexString().length) to check the length of the string -->24

MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
    if(error){
        return console.log('Unable to connect to database');
    }
    const db= client.db(databaseName)
    // db.collection('users').insertOne({
    //     name:'Ronak',
    //     age:19
    // },(error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert user!');
    //     }

    //     console.log(result.insertedId);
    // })

    db.collection('users').insertMany([{
        name:'Suha',
        age: 19
    },{
        name:'Pro stack',
        age:3
    }],(error,result)=>{
        if(error){
            return console.log('Unable to insert user');
        }
        console.log(result.insertedId);
        console.log(result.insertedIds);
        console.log(result.acknowledged);
    })

    //Challenge

    // db.collection('tasks').insertMany([{
    //     description: 'Get up early in morning',
    //     completed: false
    // },{
    //     description: 'Focus and study',
    //     completed: true
    // },{
    //     description: 'Read book',
    //     completed: false
    // }],(error,result)=>{
    //     if(error){
    //         return console.log('unable to insert task');
    //     }
    //     console.log(result.insertedIds);
    //     console.log(result.acknowledged);
    // })
})
