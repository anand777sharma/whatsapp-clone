import { useContext ,useEffect} from "react";

import { Box } from "@mui/material";

import{AccountContext} from '../../../context/AccountProvider';
import { getConversation } from "../../../service/api";
// component
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";


const ChatBox = () => {

const {person,account} = useContext(AccountContext);
const personsub=person.sub, accountsub=account.sub;
useEffect(()=>{
  getConversationDetails();
},[person.sub]);

const getConversationDetails = async ()=>{
  let data = await getConversation({senderId: accountsub,receiverId: personsub});
  console.log(data);
}

  return (
   <Box>
    <ChatHeader person = {person} />
    <Messages person = {person}/>
   </Box>
  )
}

export default ChatBox