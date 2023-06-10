const mongoose = require('mongoose');
const mongoURI= 'mongodb+srv://salomerao:Salome1002@cluster0.zrmcynv.mongodb.net/FlorDecor?retryWrites=true&w=majority'
// const mongoDB=()=>{
//     mongoose.connect(mongoURI,()=>{
//         console.log("connected");
//     });
// }

// const connectToMongo = async () => {
//     try {
//         mongoose.set('strictQuery', false)
//         mongoose.connect(mongoURI) 
//         console.log('Mongo connected')
//         const fetched_data =   mongoose.connection.collection("Food_table");
        
//         fetched_data.find({}).toArray(function( err,data){
//             //changed connection.db to connection.collection
//             if(err) 
//             console.log(err);
//             else 
//             console.log(data)
//         });
//     }
//     catch(error) {
//         console.log(error)
//         process.exit()
//     }
    
//     }
//     module.exports = connectToMongo;
const mongoconnect = async ()=>{
    mongoose.connect(mongoURI,{useNewUrlParser:true}).then(()=>{
        console.log("connection succesful");
        const fdata = mongoose.connection.collection("Food_table");
        fdata.find({}).toArray( function( err,data){
            
                        if(err)
                        {console.log(err);
                            
                        }
                        else {
                        console.log(data);
                        
                        }
                    })
    }).catch((err)=> console.log("no connection"));
    
}

module.exports = mongoconnect;