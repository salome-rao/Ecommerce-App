const express = require('express')
const router = express.Router()
const User = require("../models/User")
const {body , validationResult}= require('express-validator');
const bcrypt = require("bcryptjs");
var jwt = require('jsonwebtoken');
const jwtSecret = "HaHa"
router.post("/creatuser",
body("email").isEmail(),
body("password",'Incorrect Password').isLength({min:5}),
body("name").isLength({min:5})

,async(req,res)=>{
 
   const errors = validationResult(req);
   if(!errors.isEmpty()){
      return res.status(400).json({errors:errors.array()});
   }

   const salt = await bcrypt.genSalt(10);
   const securepass = await bcrypt.hash(req.body.password,salt)

   try{
   await User.create({
        name:req.body.name,
        password:securepass,
        email:req.body.email,
        location:req.body.location
    })
    res.json({success:true});
   }catch(error){
    console.log(error)
    res.json({success:false});
   }
})
 

// router.post('/login', [
//     body('email', "Enter a Valid Email").isEmail(),
//     body('password', "Password cannot be blank").exists(),
// ], async (req, res) => {
//     let success = false
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() })
//     }

//     const { email, password } = req.body;
//     try {
//         let user = await User.findOne({ email });  //{email:email} === {email}
//         if (!user) {
//             return res.status(400).json({ success, error: "Try Logging in with correct credentials" });
//         }

//         const pwdCompare = await bcrypt.compare(password, user.password); // this return true false.
//         if (!pwdCompare) {
//             return res.status(400).json({ success, error: "Try Logging in with correct credentials" });
//         }
//         const data = {
//             user: {
//                 id: user.id
//             }
//         }
//         success = true;
//         const authToken = jwt.sign(data, jwtSecret);
//         res.json({ success, authToken })


//     } catch (error) {
//         console.error(error.message)
//         res.send("Server Error")
//     }
// })


router.post("/loginuser",
body("email").isEmail(),
body("password",'Incorrect Password').isLength({min:5})
,async(req,res)=>{
 
  let email= req.body.email;
   try{
  let userdata= await User.findOne({email});
    if(!userdata){
      return res.status(400).json({errors:"Try logging with correct credentials"})
    }
    if(req.body.password!==userdata.password){
      return res.status(400).json({errors:"Try logging with correct credentials"})
   
    }
    return res.json({success:true})
   }catch(error){
    console.log(error)
    res.json({success:false});
   }
})
module.exports= router;
