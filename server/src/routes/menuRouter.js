import express from 'express'
export const menuRouter = express.Router();

//! Check Server (Doubts...)

menuRouter.get("/home", (req, res) => {
    res.send('This is /home ✅')
})