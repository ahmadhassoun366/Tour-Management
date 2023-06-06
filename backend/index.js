import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import tourRoute from './routes/tour.js';
dotenv.config()

const app = express();

const port = process.env.PORT || 8000
//database connection
mongoose.set("strictQuery",false);

const connect = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          
        })
        console.log('Database connected')
    } catch(err){
        console.log("Database connection Failed")
    }
}

//for testing

app.get('/', (req, res) => {
    res.send('Hello World');
});

//middleware
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use('/tours',tourRoute)
app.listen(port, () => {
    connect()
    console.log(`Server is running on port ${port}`)
})