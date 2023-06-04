const mongoose = require('mongoose');
const mongoURI= 'mongodb+srv://salomerao:Salome1002@cluster0.zrmcynv.mongodb.net/?retryWrites=true&w=majority'
// const mongoDB=()=>{
//     mongoose.connect(mongoURI,()=>{
//         console.log("connected");
//     });
// }

const connectToMongo = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(mongoURI) 
        console.log('Mongo connected')
    }
    catch(error) {
        console.log(error)
        process.exit()
    }
    }
    module.exports = connectToMongo;