setTimeout(()=>{
    console.log('Running here!!');
},2000)


const geoCode=(address,callback)=>{
    setTimeout(()=>{
        const data={
            longitude:0,
            latitude:0
        }
        callback(data)
    },2000)
}

geoCode('Goa',(data)=>{
    console.log(data);
})


const doworkCallback=(callback)=>{
    setTimeout(()=>{
        // callback('This is my Error!',undefined )
        callback(undefined,[1,4,2] )
    },2000)
}
doworkCallback((error,result)=>{
    if (error){
        return console.log(error)
    }
    console.log(result);
})