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

    // updateOne
    // const updatePromise=db.collection('users').updateOne({
    //     _id:ObjectId("61f659e44c1e37cb9779dd82")
    // },{
    //     $inc:{
    //         age:2
    //     }
    // })
    // updatePromise.then((result)=>{
    //     console.log(result);
    // }).catch((error)=>{
    //     console.log(error);
    // })

    
    //Challenge
    //UpdateMany
    db.collection('tasks').updateMany({
        completed:false
    },{
        $set:{
            completed:true
        }
        }).then((result)=>{
            console.log(result);
        }).catch((error)=>{
            console.log(error);
        })
})
