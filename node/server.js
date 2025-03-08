require('dotenv').config();

const connectDb = require("./db");
const express = require("express")
const userRoute = require("./routes/userRoute");
const app = express();
app.use(express.json())

const PORT = process.env.PORT; 

connectDb();

app.use("/user",userRoute);

app.listen(PORT,()=>{
    console.log(`Server running on the port ${PORT}`);
})