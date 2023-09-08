import express, {Express, Request, Response} from 'express'
const app:Express = express()
const postRoutes : any = require('../src/routes/post.routes')
const userRoutes : any = require('../src/routes/users.routes')
const morgan = require("morgan");
const cookieParser = require('cookie-parser')
import * as path from 'path';

app.get("/", (req:Request,res:Response)=>{
    res.send('Hello TypeScript 4.0')
})

// LOGGING MIDDLEWARE
app.use(morgan('dev'));
app.use(express.json())
app.use(cookieParser())

// Template Engine EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use('/api', postRoutes)
app.use('/api', userRoutes)


app.listen(3000, ()=>{
    console.log("server running on port 3000")
})

