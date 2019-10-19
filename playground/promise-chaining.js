require('../src/db/mongoose')
const User = require('../src/models/user')


//5d96e596a746d73cb802b0a4

// User.findByIdAndUpdate('5d96ecd6c9244826c49dc9cd', { age: 18 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 18 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })


const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5d96ecd6c9244826c49dc9cd', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})