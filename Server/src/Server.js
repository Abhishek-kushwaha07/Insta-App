import {app} from './app/app.js'
import {ConnectDB} from "./config/ConnectDB.js"
await ConnectDB()
const Port = 3000


app.listen(Port,()=>{
    console.log(`server is runing on ${Port} `)
})




