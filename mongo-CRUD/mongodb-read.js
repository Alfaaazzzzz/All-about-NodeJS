// CRUD Operations

// Read

const { ObjectID } = require('bson');
const {MongoClient,ObjectId}= require('mongodb')

const connectionURL='mongodb://127.0.0.1:27017'
const databaseName='task-manager'


MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
    if(error){
        return console.log('Unable to connect to database');
    }
    const db= client.db(databaseName)

    // FindOne
    //you can also search with any one of the fields or more than one field also.
    // db.collection('users').findOne({_id: ObjectId("61f6635c09df7abca8053f63")} you can also search by id.
    // db.collection('users').findOne({name:'Alfaz',age:21},(error,user)=>{
    //     if(error){
    //         return console.log('Unable to fetch user');
    //     }
    //     console.log(user);
    // })


    // Find
    // db.collection('users').find({age:19}).toArray((error,user)=>{
    //     if(error){
    //         return console.log('Unable to fetch user');
    //     }
    //     console.log(user);
    // })
    // db.collection('users').find({age:19}).count((error,count)=>{
    //     if(error){
    //         return console.log('Unable to fetch user');
    //     }
    //     console.log(count);
    // })


    // Challenge

    // db.collection('tasks').findOne({_id:ObjectId("61f665df0c885ed935463822")},(error,task)=>{
    //     if (error){
    //         return console.log('Unable to fetch the task!');
    //     }
    //     console.log(task);
    // })

    db.collection('tasks').find({completed:false}).toArray((error,task)=>{
        if(error){
            return console.log('Unable to fetch the task');
        }
        console.log(task);
    })
    
})
