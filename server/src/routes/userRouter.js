import express from 'express'
import { newUserController } from '../controllers/users/newUserController.js';
export const userRouter = express.Router();

userRouter.get("/", (req, res) => {
    res.send('This is /users')
})

//Register new user
userRouter.post("/register", newUserController)

//Activate a registrated user
userRouter.put("/validate/:registrationCode", (req, res) => {   
    res.send(`This is /users/validate/${ req.params.registrationCode } ✅ 
    //Add a '/' with the code for the req.params`)
})

//Login a registered user
userRouter.get('/login', (req,res) => {
    res.send('This is users/login ✅')
})