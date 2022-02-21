// CRUD Operations

// Update


const {MongoClient,ObjectId}= require('mongodb')

const connectionURL='mongodb://127.0.0.1:27017'
const databaseName='task-manager'


MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
    if(error){
        return console.log('Unable to connect to database');
    }
    const db= client.db(databaseName)  

    // deleteMany

    // db.collection('users').deleteMany({
    //     age:23
    // }).then((result)=>{
    //     console.log(result);
    // }).catch((error)=>{
    //     console.log(error);
    // })

    //Challenge
    //deleteOne

    db.collection('tasks').deleteOne(
        {description:"Get up early in morning"}
        ).then((result)=>{
            console.log(result);
        }).catch((error)=>{
            console.log(error);
        })
})
