require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5d96f87a28925b4458703391').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const deleteTask = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('1d9741a6ed862f3590ee9284').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log('error', e)
})