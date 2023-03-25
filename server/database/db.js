import mongoose from "mongoose";
// import dotenv from 'dotenv';

// dotenv.config();
// const URL =process.env.DB_URL;

const Connection = async () => {
    const URL ='mongodb+srv://anand:anand123@cluster0.82p5mzf.mongodb.net/?retryWrites=true&w=majority'
    try {
        await mongoose.connect(URL,{useUnifiedTopology:true});
        console.log('Database connected Successfully');
    } catch (error) {
        console.log('Error while Connecting with the Database', error.message);
    }
}

export default Connection;