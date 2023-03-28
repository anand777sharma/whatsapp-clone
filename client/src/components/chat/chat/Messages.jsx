
import { Box,styled } from "@mui/material";

// component
import Footer from "./Footer";

const Wrapper = styled(Box)`
background-image:url(${'https://mcdn.wallpapersafari.com/medium/54/32/SUcwDz.jpg'});
background-repeat: no-repeat;
background-size: cover;
`;
const Component = styled(Box)`
height:80vh;
overflow-y:scroll;
`;

const Messages = () => {
  return (
    <>
   <Wrapper>
<Component>

</Component>

   </Wrapper>
   <Footer/>
   </>
  )
}

export default Messages;