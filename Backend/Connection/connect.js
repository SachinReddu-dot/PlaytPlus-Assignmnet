const mongoose = require('mongoose')

const connect = ()=>{
    try {
        const response = mongoose.connect(`${process.env.MONGO_URL}`)
        if(response) console.log('connected to database')
    } catch (err) {
        console.log(err)
    }
}

connect();