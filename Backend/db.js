const mongoose = require('mongoose');
const mongoURI= 'mongodb+srv://salomerao:Salome1002@cluster0.zrmcynv.mongodb.net/FlorDecor?retryWrites=true&w=majority'
const fdata=require('./models/User');
// const mongoDB=()=>{
//     mongoose.connect(mongoURI,()=>{
//         console.log("connected");
//     });
// }


const foodSchema = new mongoose.Schema({
  
  category: String
  
});

const ItemSchema = new mongoose.Schema(
  {
    CategoryName:{
      type:String   
  },
  name:{
      type:String
  },
  img:{
     type:String
  },
  Quantity: [{ half: String, full: String }],
  description:{
      type:String
  }
  }
);
const Item = mongoose.model('Item',ItemSchema)
const Food = mongoose.model('Food', foodSchema);
const mongoconnect = async ()=>{
   await mongoose.connect(mongoURI,{useNewUrlParser:true}).then( async()=>{
        console.log("connection succesful");
        // const fdata =  mongoose.connection.db.collection("Food_table");
        console.log(fdata); 
 
        try{
         await  Item.find({}).then((data, err) => {
                
                    // if (err) {
                    //  console.log('Error retrieving data:',err);
                    // } else {
                    //   // console.log('Retrieved data:', data);
                    //   global.food_items=data;
                    //  console.log(global.food_items);
                    // } 
                    Food.find({}).then((catdata,err)=>{
                   if (err) {
                     console.log('Error retrieving data:',err);
                    } else {
                      // console.log('Retrieved data:', catdata);
                      global.food_items=catdata;
                     console.log(global.food_items);
                     global.food_category=data;
                     console.log(global.food_category);
                    }
                   })




                  });

        }catch(e){
            console.log("error",e);
        }
     
    }).catch((err)=> console.log("no connection",err));
    
}

module.exports = mongoconnect;