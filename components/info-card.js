import { useMemo } from "react";
import styles from "./info-card.module.css";

const InfoCard = ({ icon, sellYourHome, propWidth }) => {
  const sellYourHomeStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.sellYourHome} style={sellYourHomeStyle}>
      <div className={styles.contents}>
        <img className={styles.icon} alt="" src={icon} />
        <div className={styles.contents}>
          <div className={styles.sellYourHome1}>{sellYourHome}</div>
          <div className={styles.weDoA}>
            We do a free evaluation to be sure you want to start selling.
          </div>
          <button className={styles.readMore}>Read more</button>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
