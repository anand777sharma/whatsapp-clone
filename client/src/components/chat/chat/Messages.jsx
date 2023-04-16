import { useContext } from "react";

import { Box,styled } from "@mui/material";

import {AccountContext} from '../../../context/AccountProvider';

// component
import Footer from "./Footer";

const Wrapper = styled(Box)`
background-image:url(${'https://mcdn.wallpapersafari.com/medium/54/32/SUcwDz.jpg'});
background-repeat: no-repeat;
background-size: cover;
`;
const Component = styled(Box)`
height:78vh;
overflow-y:scroll;
`;


const Messages = ({person}) => {

const {account} = useContext(AccountContext);

  const sendText = (e)=>{
console.log(e);
const code = e.keyCode || e.which;
if(code === 13){
  let message = {
    senderId: account.sub,
    receiverId: person.sub,
    // conversationId:
  }
}
  }
  return (
    <>
   <Wrapper>
<Component>

</Component>

   </Wrapper>
   <Footer sendText = {sendText}/>
   </>
  )
}

export default Messages;