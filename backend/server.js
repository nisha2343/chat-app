import express from "express"
import dotenv from "dotenv"
import path from 'path'
const app = express();

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.js"

dotenv.config();

const PORT = process.env.PORT || 5000;



const __dirname  = path.resolve();

// app.get("/", (req, res) => {
//     res.send("Hello World");
// });

app.use(express.json());    //parse the requests with JSON payloads (req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes)
app.use("/api/message", messageRoutes)
app.use("/api/users", userRoutes)
app.use(express.static(path.join(__dirname, "/frontend/dist")))

app.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
})


app.listen(PORT, () =>{
connectToMongoDB();
console.log(`Server running on ${PORT}`)
console.log(process.env.PORT);

});
