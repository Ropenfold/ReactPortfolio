import React from "react";
import css from "../Home/home.module.css"
import beHappy from "../../images/be-happy.jpg"
import loveWork from "../../images/do-what-you-love.jpg";
import seaWaves from "../../images/sea.jpg";
import readBook from "../../images/the-message.jpg";


class Home extends React.Component {
  render() {
    return (
      <>
       <div className={css.totalContainer}>
            <div className={css.firstContainer}>
            <img className={css.collagephoto1} src={beHappy} alt="be-happy" />
            {/* <img className={css.collagephoto2} src={seaWaves} alt="sea-waves" /> */}

            </div>
              {/* <div className={css.secondContainer}>
              <img className={css.collagephoto3} src={loveWork} alt="do-what-you-love" />
            </div>
          <div className={css.thirdContainer}>
            <img className={css.collagephoto4} src={readBook} alt="read-book" />
          </div> */}
        </div>
      </>
    );
  }
}

export default Home;
