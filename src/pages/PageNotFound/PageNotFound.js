import React from "react";
import { Link } from "react-router-dom";
import styles from "./PageNotFound.module.css";

const PageNotFound = () => {
  return (
    <div style={{ background: "#181828" }}>
      <header className={styles.top_header}></header>

      {/* <!--dust particel--> */}
      <div>
        <div className={styles.starsec}></div>
        <div className={styles.starthird}></div>
        <div className={styles.starfourth}></div>
        <div className={styles.starfifth}></div>
      </div>
      {/* <!--Dust particle end---> */}

      <div className={styles.lamp__wrap}>
        <div className={styles.lamp}>
          <div className={styles.cable}></div>
          <div className={styles.cover}></div>
          <div className={styles.in_cover}>
            <div className={styles.bulb}></div>
          </div>
          <div className={styles.light}></div>
        </div>
      </div>
      {/* <!-- END Lamp --> */}
      <section className={styles.error}>
        {/* <!-- Content --> */}
        <div className={styles.error__content}>
          <div className={`${styles.error__message} ${styles.message}`}>
            <h1 className={styles.message__title}>Page Not Found</h1>
            <p className={styles.message__text}>
              We're sorry, the page you were looking for isn't found here. The
              link you followed may either be broken or no longer exists. Please
              try again, or take a look at our.
            </p>
          </div>
          <div className={`${styles.error__nav} ${styles.e_nav}`}>
            <Link to="/" className={styles.e_nav__link}></Link>
          </div>
        </div>
        {/* <!-- END Content --> */}
      </section>
    </div>
  );
};

export default PageNotFound;
