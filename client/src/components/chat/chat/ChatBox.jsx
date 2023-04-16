import { useContext ,useEffect} from "react";

import { Box } from "@mui/material";

import{AccountContext} from '../../../context/AccountProvider';
import { getConversation } from "../../../service/api";
// component
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";


const ChatBox = () => {

const {person,account} = useContext(AccountContext);
useEffect(()=>{
  const getConversationDetails = async ()=>{
    let data = await getConversation({senderId: account.sub,receiverId: person.sub});
    console.log(data);
  }
  getConversationDetails();
},[person.sub]);

  return (
   <Box>
    <ChatHeader person = {person} />
    <Messages person = {person}/>
   </Box>
  )
}

export default ChatBox