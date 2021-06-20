import React, { useState } from 'react';
import AzureAuthenticationButton from "../../azure/azure-authentication-component";
import { AccountInfo } from "@azure/msal-browser";
import { useHistory } from 'react-router-dom';
import NlTabBar from '../../components/NlTabBar';

import './styles.css';

import NlOrangeLogo from '../../assets/nl_logo_laranja.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const history = useHistory();

  // current authenticated user
  const [currentUser, setCurrentUser] = useState<AccountInfo>();

  // authentication callback
  const onAuthenticated = async (userAccountInfo: AccountInfo) => {
    setCurrentUser(userAccountInfo);
  };

  // Render JSON data in readable format
  const PrettyPrintJson = ({ data }: any) => {
    return (
      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  };

  // Quick link - user revokes app's permission
  const ShowPermissionRevokeLinks = () => {
    return (
      <div>
        <div><a href="https://myapps.microsoft.com" target="_blank" rel="noopener">Revoke AAD permission</a></div>
        <div><a href="https://account.live.com/consent/manage" target="_blank" rel="noopener">Revoke Consumer permission</a></div>
      </div>
    );
  };

  return(
    !localStorage.getItem('token') ? (
    <div>
      <header>
        <NlTabBar allowMenu={false} />
      </header>
      <div className="login-page">
      <div className="nl-login-logo-container">
        <img src={NlOrangeLogo} alt="NlLogoLaranja" className="nl-login-logo"/>
        <h2>CLASSROOM</h2>
      </div>
      <form onSubmit={() => []}>
        <h3>Entre com suas credencias Microsoft</h3>
        <div id="App">
          <AzureAuthenticationButton onAuthenticated={onAuthenticated} />
          {currentUser && (
            <div>
              <PrettyPrintJson data={currentUser} />
              <ShowPermissionRevokeLinks />
            </div>
          )}
        </div>
      </form>
      </div>
    </div>
    ):(
      history.push('/content/courses')
    )
  )
 
}

export default Login;
