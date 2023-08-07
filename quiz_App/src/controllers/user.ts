//send/recieve data to/from database via model
import {Request,Response, NextFunction } from 'express';
const registerUser = (req:Request, res:Response, next:NextFunction)=>{
    
    console.log("here");
    console.log(req.body); //to model
    console.log("registeration done!");

    res.send("registeration done!");    


}


export {registerUser}