 import express from 'express';
 import mongoose, { mongo } from 'mongoose';

 import userRoute from './routes/user';

 const app = express();

 const connectionString = "mongodb+srv://developeraarushkashyap:v2wtTOQGbq1Q1OUS@myclass.vfl984y.mongodb.net/workshopdb?retryWrites=true&w=majority"
 
 app.use(express.json());

 app.get('/',(req,res)=>{
    res.send("hi hello");   
 })

app.use('/user',userRoute);


 mongoose.connect(connectionString)
.then(()=> {
    console.log('connected Successfully')
    app.listen(3000);
})
.catch((err) => {console.log(err); })
