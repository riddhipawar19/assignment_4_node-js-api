const express = require("express")
const connectToDb = require("./database")

const PORT = 3000

connectToDb()

app = express()

app.use(express.json())
app.use("/",require("./routes/post_routes"))

app.listen(PORT, ()=>{
    console.log(`Server running at PORT ${PORT}`);
})