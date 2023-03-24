import { useContext,useState } from "react";

import { Box,styled } from "@mui/material";
import {Chat as MessageIcon,DonutLargeOutlined} from '@mui/icons-material';
import { AccountContext } from "../../../context/AccountProvider";
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../chat/drawer/InfoDrawer";

const Component =styled(Box)`
height:44px;
background:#ededed;
padding:8px 16px;
display:flex;
align-items:center;
`;
const Wrapper =styled(Box)`
margin-left:auto;
&>*{
    margin-left:2px;
    padding:8px;
    color:#000;
}
`;

const Image = styled('img')({
    heigth:40,
    width:40,
    borderRadius:'50%'
})

const Header = () => {

    const [openDrawer,setOpenDrawer] = useState(false);

    const {account} = useContext(AccountContext);
const toggleDrawer =()=>{
    setOpenDrawer(true);
}


  return (
<>
<Component>
    <Image src= {account.picture} alt="dp"  onClick = {()=>toggleDrawer()} />
    <Wrapper>
        <DonutLargeOutlined/>
        <MessageIcon/>
        <HeaderMenu setOpenDrawer={setOpenDrawer} />
    </Wrapper>
</Component>
<InfoDrawer open ={openDrawer} setOpen = {setOpenDrawer} />
</>
  )
}

export default Header