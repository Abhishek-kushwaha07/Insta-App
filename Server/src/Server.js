import {app} from './app.js'
import {ConnectDB} from "./config/db.js"
await ConnectDB()
const Port = 3000


app.listen(Port,()=>{
    console.log(`server is runing on ${Port} `)
})




