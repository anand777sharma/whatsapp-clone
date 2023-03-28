import { Box } from "@mui/material"

// component
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";


const ChatBox = () => {
  return (
   <Box>
    <ChatHeader/>
    <Messages/>
   </Box>
  )
}

export default ChatBox