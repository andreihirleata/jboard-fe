
import { JobPage } from "./layouts/JobPage/JobPage";
import { Footer } from "./layouts/NavbarAndFooter/Footer";
import { NavBar } from "./layouts/NavbarAndFooter/NavBar";

import { Route, Switch } from "react-router-dom";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";





export const App = () => {

  

  return (
    <div>

        <NavBar />
        <Switch>
          <Route path="/" exact>
            <JobPage />
          </Route>
          <Route
            path="/login"
            // render={() => <LoginWidget config={OktaConfig}></LoginWidget>}
          >
            <SignIn />
          </Route>
          <Route path="sign-up" exact>
            <SignUp />
          </Route>
          <SignUp />
        </Switch>
        <Footer />

      </div>

  );
};
