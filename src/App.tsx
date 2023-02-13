import { JobPage } from "./layouts/JobPage/JobPage";
import { Footer } from "./layouts/NavbarAndFooter/Footer";
import { NavBar } from "./layouts/NavbarAndFooter/NavBar";

export const App = () => {
  return (
    <div>
      <NavBar />
        <JobPage />
      <Footer />
    </div>
  );
};
