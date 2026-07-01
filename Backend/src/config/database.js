const mongoose = require('mongoose')

async function connectedToDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 10000,
        })
        console.log('connected to database')
    }
    catch(err){
        console.error('database connection failed:', err.message)
        throw err
    }
}

module.exports= connectedToDB
