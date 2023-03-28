import axios from 'axios';

const url = 'http://localhost:8000';
export const adduser = async (data)=>{
try {
    axios.post(`${url}/add`,data);
} catch (error) {
   console.log('Error while addUser API',error.message); 
}
}

export const getUsers = async ()=>{
    try{
        let response = await axios.get(`${url}/users`);
        console.log(response);
        return response.data;

    }catch(error){
        console.log('error while calling getUsers api',error.message);
    }
}