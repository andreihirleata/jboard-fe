import {  Redirect } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
import { Spinner } from "flowbite-react";
import OktaSignInWidget from "./OktaSignInWidget";

export const LoginWidget = ({ config }) => {
  const { oktaAuth, authState } = useOktaAuth();
  const onSuccess = (tokens) => {
    oktaAuth.handleLoginRedirect(tokens);
  };

  const onError = (error) => {
    console.log("Sign in error: ", error);
  };

  if (!authState) {
    return (
      <div className="min-h-screen flex flex-col items-center">
        <Spinner
          className="mt-20"
          aria-label="Signing in"
          color="info"
          size="xl"
        />
        <p className="font-medium font-size-20 mt-2">Loading</p>
      </div>
    );
  }

  return authState.isAuthenticated ? (
    <Redirect to={{ pathname: "/" }} />
  ) : (
    <OktaSignInWidget config={config} onSuccess={onSuccess} onError={onError} />
  );
};

export default LoginWidget;
