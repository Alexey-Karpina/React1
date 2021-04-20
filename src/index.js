import React, { Fragment } from "react";
import ReactDom from "react-dom";

import ProfileCard from "./components/ProfileCard";

const App = () => {
  return (
    <Fragment>
      <ProfileCard1 />
    </Fragment>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
