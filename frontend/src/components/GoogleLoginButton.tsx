import React from 'react';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

import CONFIG from '../config';

interface IGoogleLoginButtonProps {
  onSuccess: (response: GoogleLoginResponse | GoogleLoginResponseOffline) => void;
  onFailure: (error: any) => void;
}

const GoogleLoginButton = (props: IGoogleLoginButtonProps): JSX.Element => {
  const { onSuccess, onFailure } = props;

  return (
    <GoogleLogin
      clientId={CONFIG.GOOGLE.APP_CLIENT_ID}
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy="single_host_origin"
      theme="dark"
      buttonText="Login with Google"
      icon
    />
  );
};

export default GoogleLoginButton;
