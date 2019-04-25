import React from "react";
import css from "../Home/home.module.css";
import "../../../src/root.css";

class Home extends React.Component {
  render() {
    return (
      <>
        <div className={css.totalContainer}>
          <div className={css.nameContainer} />
          <div className={css.iAm}>I'm Stuart. I build websites.</div>
        </div>
      </>
    );
  }
}

export default Home;
