import express, {Express, Request, Response} from 'express'
const app:Express = express()
const postRoutes : any = require('../src/routes/post.routes')

app.get("/", (req:Request,res:Response)=>{
    res.send('Hello TypeScript 4.0')
})

app.use('/api', postRoutes)
app.use(express.json());


app.listen(3000, ()=>{
    console.log("server running")
})

