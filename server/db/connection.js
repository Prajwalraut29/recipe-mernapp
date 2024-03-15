const mongoose = require('mongoose')

const connection = async () => {
    const DbConnect = await mongoose.connect(process.env.MONGO_URL)
    if (DbConnect) {
        console.log('db connected');
    }
    else {
        console.log('db failt to connected');
    }
}

module.exports = { connection }