
import { GoogleOAuthProvider } from '@react-oauth/google';

// component
import Messenger from './components/Messenger';
import AccountProvider from './context/AccountProvider';


function App() {

  //  const clientId = process.env.GOOGLEID;
   const clientId = '372256147435-hoku2hubpjlllis7nbj29or839jfc5bt.apps.googleusercontent.com';
  
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
      <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
