import { LoginCallback, Security } from "@okta/okta-react";
import { JobPage } from "./layouts/JobPage/JobPage";
import { Footer } from "./layouts/NavbarAndFooter/Footer";
import { NavBar } from "./layouts/NavbarAndFooter/NavBar";
import { OktaConfig } from "./lib/OktaConfig";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { useHistory, Route, Switch } from "react-router-dom";

import LoginWidget from "./auth/LoginWidget";

const oktaAuth = new OktaAuth(OktaConfig);

export const App = () => {
  const history = useHistory();

  const customAuthHandler = () => {
    history.push("/login");
  };

  const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
    history.replace(toRelativeUrl(originalUri || "/", window.location.origin));
  };

  return (
    
      <Security
        oktaAuth={oktaAuth}
        restoreOriginalUri={restoreOriginalUri}
        onAuthRequired={customAuthHandler}
      >
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <JobPage />
          </Route>
          <Route
            path="/login"
            render={() => <LoginWidget config={OktaConfig}></LoginWidget>}
          ></Route>
          <Route path="/login/callback" component={LoginCallback}></Route>
        </Switch>
        <Footer />
      </Security>

  );
};
