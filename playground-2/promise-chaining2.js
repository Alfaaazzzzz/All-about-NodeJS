require('../src/db/mongoose')
const Tasks= require('../src/models/tasks')

// Tasks.findByIdAndDelete('61f7a31443b1c78c62efe301').then((task)=>{
//     console.log(task);
//     return Tasks.countDocuments({completed:false})
// }).then((results)=>{
//     console.log(results);
// }).catch((e)=>{
//     console.log(e);
// })

const deleteTaskAndCount= async(id)=>{
    const deleteTask= await Tasks.findByIdAndDelete(id)
    const count= await Tasks.countDocuments({completed:false})
    return count
}

deleteTaskAndCount('61f779a14963b19f2d9b065f').then((count)=>{
    console.log(count);
}).catch((e)=>{
    console.log(e);
})