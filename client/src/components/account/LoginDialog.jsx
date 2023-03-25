import {useContext} from 'react';

import { Dialog, Box, Typography,List ,ListItem,styled } from "@mui/material"
import { adduser } from '../../service/api';

import {qrCodeImage} from '../../components/constants/data'
import { AccountContext } from '../../context/AccountProvider';
import {GoogleLogin} from '@react-oauth/google'; 
import jwt_decode from 'jwt-decode';

const Component = styled(Box)`
display:flex;
`;
const Container = styled(Box)`
padding:56px 0 56px 56px;
`;
const QRCode = styled('img')({
    height:264,
    margin:'50px 0 0 50px'
})

const Title = styled(Typography)`
font-size:26px;
color:#525252;
font-weight:300;
font-family:inherit;
margin-bottom:25px;
`;
const StyledList = styled(List)`
& > li{
    padding:0;
    margin-top:15px;
    font-size:18px;
    line-height:28px;
    color:#4a4a4a;
}
`


const dialogStyle = {
    height: "96%",
    marginTop: '12%',
    width: '68%',
    maxWidth: "100%",
    maxHeight: "100%",
    boxShadow: "none",
    overflow: "hidden"
}

const LoginDialog = () => {

const {setAccount}=useContext(AccountContext);

const onLoginSuccess = async (res)=>{
    const decoded = jwt_decode(res.credential);
   setAccount(decoded);
   await adduser(decoded);
}
const onLoginError = (res)=>{
console.log('Login Failed',res);
}



    return (
        <Dialog
            open={true}
            PaperProps={{ sx: dialogStyle }}
            hideBackdrop={true}
        >
<Component>
    <Container>
        <Title> Use WhatsApp on your computer</Title>
        <StyledList>
            <ListItem>1. Open WhatsApp on Your Phone </ListItem>
            <ListItem>2. Tab Menu or Setting and select Linked Devices</ListItem>
            <ListItem>3. Tap on Linked Device</ListItem>
            <ListItem>4. Point your phone to this screen to capture the code</ListItem>
        </StyledList>
    </Container>
    <Box>
        <QRCode src={qrCodeImage} alt="qr code" />
        <Box>
            <GoogleLogin
            onSuccess={onLoginSuccess}
            onError={onLoginError}
            />
        </Box>
    </Box>
</Component>


        </Dialog>
    )
}

export default LoginDialog