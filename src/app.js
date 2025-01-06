import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();
//cross origin resourse sharing only it's frontend can commmunicate with it's backend no other resource can communicate
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
//configurations
//limit jitni set kroge utna hi json aayega hum unlimited nhi kr skte vrna system crash ho jaayega
app.use(express.json({limit: "16kb"}))
//urls me %20 + hote hai unhe smjhne ke liye urlencoded use kia hai and extended matlab ki hum objects me further objects create kar skte hai
app.use(express.urlencoded({extended: true, limit: "16kb"}))
// files images ke liye configure taki hum images files use kr ske
app.use(express.static("public"))
// taki hum user ke browser ki cookies access kr ske
app.use(cookieParser())


export {app}