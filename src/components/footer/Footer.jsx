import React from "react";
import Styles from "./_footer.module.css";

const Footer = () => {
  return (
    <section id={Styles.foot}>
      <article className={Styles.footer}>
        <div>
          <p>&#169; 2022 Geeks. All Rights Reserved</p>
        </div>

        <div className={Styles.FootDet}>
          <ul>
            <li>
              <a
                href="https://preview.themeforest.net/item/geeks-online-learning-marketplace-wordpress-theme/full_screen_preview/34322176?_ga=2.163920255.1556889498.1672294399-2022456930.1663176550"
                target="new"
              >
                About
              </a>
            </li>
            <li>
              <a href="">Terms & Conditions</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default Footer;
