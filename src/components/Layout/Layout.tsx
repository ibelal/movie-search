import { Fragment } from "react";
import Footer from "./Footer";
import MainNavigation from "./MainNavigation";

export const Layout: React.FC = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main className="bd-content order-1 mb-auto" id="content">
        {props.children}
      </main>
      <Footer />
    </Fragment>
  );
};
