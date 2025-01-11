import dotenv from "dotenv"
// index.js
import { app } from "./app.js"
import connectDB from "./db/index.js";

dotenv.config({
    path: "./env"
})




connectDB()

.then(() => {
    app.on("error", (error) => {
        console.log("failed connection", error);
        throw error
    })
    app.listen(process.env.PORT||8000, () => {
        console.log(`Sever is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("mongodb connection failed!!", err)
})

// import express from "express"
// const app = express();

// ;(async () => {
//     try{
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//        app.on("error", (error) => {
//         console.log("ERRR: ", error);
//         throw error
//        })

//        app.listen(process.env.PORT, () => {
//         console.log(`App is listening on port ${process.env.PORT}`)
//        })
//     }catch(error){
//        console.log(error)
//        throw err 
//     }
// })()