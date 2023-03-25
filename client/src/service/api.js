import axios from 'axios';

const url = 'http://localhost:8000';
export const adduser = async (data)=>{
try {
    xsiox.post(url,data);
} catch (error) {
   console.log('Error while addUser API',error.message); 
}
}