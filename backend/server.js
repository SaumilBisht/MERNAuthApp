const express=require("express")
const app=express()
const mainRouter=require("./routes/index")
const cors=require("cors")

app.use(cors())
app.use(express.json())

app.use("/basic",mainRouter);

app.listen(3000);