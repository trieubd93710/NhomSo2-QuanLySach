const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken');
require('dotenv').config();

const port = process.env.DB_PORT || 3000
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

let routes = require('./api/routes');//import routes

routes(app);


app.use((req,res)=>{    
    res.status(404).send({url : req.originalUrl + 'not found'});
})


app.use(express.static("./public"));


// app.get('/',(req,res)=>{
//     res.send("Wellcom to website")
// })

// app.get('/views/login',(req,res)=>{
//     res.render("login.ejs")
// })

// app.get('/register',(req,res)=>{
//     res.render("register.ejs")
// })


// app.post('/register',async (req,res)=>{
//     try {
//         // Get user input
//         const {fullName,email,birthday,status,address} = req.body;

//         // Validate user input
//         if (!(fullName && email && birthday && status && address)) {
//             res.status(400).send('All input is required');
//         }

//         // check if user already exist
//         // Validate if user exist in our database

//         const oldUser = await app.findOne({email});

//         if (oldUser) {
//             res.status(409).send("User already exist. Please login.");
//         }

//         encryptedStatus = await bcrypt.hash(status, 10);

//         const user = app.create({
//             fullName,
//             email: email.toLowerCase(),
//             birthday,
//             status: encryptedStatus,
//             address
//         });

//         //Create token

//         const token = jwt.sign(
//             { user_id: app._id, email },
//             process.env.TOKEN_KEY,
//             {
//               expiresIn: "2h",
//             }
//         )

//             // save user token
//         user.token = token;

//         // return new user
//         res.status(201).json(user);
//     } catch (error) {
//         console.log(error)
//     }
// })

// app.post('/login',(req,res)=>{
    
// })

app.listen(port,function(){
    console.log(`Server start on http://localhost:${port}`);
});


