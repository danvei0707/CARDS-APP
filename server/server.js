import express from 'express'
import morgan from 'morgan'
import {userRouter} from "./src/routes/userRouter.js"
// import {menuRouter} from "./src/routes/menuRouter.js"
import errorsControllers from './src/controllers/errorsControllers.js'

const app = express();
app.use(express.json());
const PORT = 5050;

app.use(morgan('dev'));

//* ÚLTIMAS MODIFICACIONES EN NEW USER
app.use("/users", userRouter)

//! Hace falta un router para el menú principal? O es solo front?
// app.use("/", menuRouter)

app.use("*", errorsControllers.notFound)
app.use("*", errorsControllers.handler)

app.listen(PORT, console.log(`App listening in port ${PORT}`))