
import { GoogleOAuthProvider } from '@react-oauth/google';

// component
import Messenger from './components/Messenger';
import AccountProvider from './context/AccountProvider';


function App() {

   const clientId = process.env.GOOGLEID;
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
      <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
