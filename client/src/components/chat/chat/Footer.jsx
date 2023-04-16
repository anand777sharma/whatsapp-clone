import {useState} from 'react';

import { Box,InputBase,styled } from "@mui/material";
import { EmojiEmotionsOutlined,AttachFile,Mic } from "@mui/icons-material";

const Container = styled(Box)`
    height: 55px;
    background: #ededed;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 15px;
    &  > * {
        margin: 5px;
        color: #919191;
    }
`;
const Search = styled(Box)`
background-color:#ffff;
border-radius:10px;
width:calc(94%-100px);
`; 

const InputField = styled(InputBase)`
width:100%;
padding:20px;
height:20px;
padding-left:25px;
font-size:14px;
width:56vw;
`;
const ClipIcon = styled(AttachFile)`
transform:rotate(40deg)
`;


const Footer = ({sendText}) => {

// const [text,setText] = useState('');
const [setText] = useState('');

  return (
   <Container>
    <EmojiEmotionsOutlined/>
    <ClipIcon/>
    <Search>
        <InputField placeholder="Type a message"
        onChange = {(e)=>setText(e.target.value)}
        onKeyPress={(e)=>sendText(e)}
        />
    </Search>
    <Mic/>
    
   </Container>
  )
}

export default Footer