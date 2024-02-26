import { useMemo } from "react";
import styles from "./property-card.module.css";

const PropertyCard = ({
  propertyImage,
  ellipse1,
  propWidth,
  propFlex,
  propMinWidth,
}) => {
  const card1Style = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propWidth, propFlex, propMinWidth]);

  return (
    <div className={styles.card1} style={card1Style}>
      <img className={styles.propertyImageIcon} alt="" src={propertyImage} />
      <div className={styles.propertyName}>
        <div className={styles.alliumPlaceOrlando}>
          92 ALLIUM PLACE, ORLANDO FL 32827
        </div>
      </div>
      <div className={styles.price}>
        <div className={styles.div}>$ 590,693</div>
      </div>
      <div className={styles.moreDetails}>
        <div className={styles.parking}>
          <img className={styles.carIcon} alt="" src="/car.svg" />
          <div className={styles.ft}>4</div>
        </div>
        <div className={styles.parking}>
          <img className={styles.carIcon} alt="" src="/bathtub.svg" />
          <div className={styles.ft}>4</div>
        </div>
        <div className={styles.parking}>
          <img className={styles.carIcon} alt="" src="/arrowsout.svg" />
          <div className={styles.ft}>2,096.00 ft</div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.user}>
          <img className={styles.userChild} alt="" src={ellipse1} />
          <div className={styles.jennyWilson}>Jenny Wilson</div>
        </div>
        <div className={styles.ctas}>
          <div className={styles.share}>
            <img
              className={styles.sharenetworkIcon}
              alt=""
              src="/sharenetwork.svg"
            />
          </div>
          <div className={styles.share}>
            <img className={styles.sharenetworkIcon} alt="" src="/heart.svg" />
          </div>
          <div className={styles.share}>
            <img className={styles.sharenetworkIcon} alt="" src="/plus.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
