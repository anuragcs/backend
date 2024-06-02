import app from "./app.js"
import dbconnection from "./db/index.js";
import dotenv from "dotenv";

dotenv.config(({
    path:'./env'
}))
dbconnection()
//.then .catch is a promise for async and await used in dbconnection
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running on port : ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log(err)
    })