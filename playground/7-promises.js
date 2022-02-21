// const doworkPromise= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         // resolve([2,4,1])`
//         reject('This is my Error!')
//     },2000)
// })

// doworkPromise.then((result)=>{
//     console.log('Success!',result);
// }).catch((error)=>{
//     console.log(error);
// })

//Advance

const add=(a,b)=>{
    return new Promise((resolve,resject)=>{
        setTimeout(()=>{
            resolve(a+b)
        },2000)
    })
}
// add(1,2).then((sum)=>{
//     console.log(sum);

//     add(sum,5).then((sum2)=>{
//         console.log(sum2);
//     }).catch((e)=>{console.log(e);})
// }).catch((e)=>{
//     console.log(e);
// })

// The above code is not efficient so to come over this type of nesting promises we have a beatiful concept known as promise chaining

add(1,2).then((sum)=>{
    console.log(sum);
    return add(sum,4)
}).then((sum2)=>{
    console.log(sum2);
}).catch((e)=>{
    console.log(e);
})

//This is called promise chaining