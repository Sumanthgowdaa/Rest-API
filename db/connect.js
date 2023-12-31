const mongoose = require('mongoose')

const connectDb = async() => {
    return mongoose.connect(process.env.MONGO_URL)
    .then(res => {
        console.log(`mongoDB connected`)
    }).catch(err => console.log(err.message))
}

module.exports = connectDb