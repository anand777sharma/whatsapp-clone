import {useEffect,useState,useContext}from 'react';
import {getUsers} from '../../../service/api';
import{AccountContext} from '../../../context/AccountProvider';
import {Box ,styled,Divider} from '@mui/material';
import Conversation from './Conversation';

const Component = styled(Box)`

height:81vh;
overflow:overlay;
`;
const StyledDivider= styled(Divider)`
margin:0 0 0 70px;
background:#e9edef;
`;


const Conversations = () => {

  const[users,setUsers] = useState([]);

const {account} = useContext(AccountContext);
  useEffect(()=>
  {
    const fetchData = async ()=>{
      let response = await getUsers();
      setUsers(response);
    }
    fetchData();
  },[])

  return (
   <Component>
{
  users.map(user =>(
    user.sub!==account.sub &&
    <>
<Conversation user = {user}/>
<StyledDivider/>
</>
  ))
}
   </Component>
   
  )
}

export default Conversations