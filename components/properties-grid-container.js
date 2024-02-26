import PropertyCard from "./property-card";
import styles from "./properties-grid-container.module.css";

const PropertiesGridContainer = () => {
  return (
    <div className={styles.cardwrapper}>
      <div className={styles.cards}>
        <PropertyCard
          propertyImage="/property-image@2x.png"
          ellipse1="/ellipse-1@2x.png"
        />
        <PropertyCard
          propertyImage="/property-image1@2x.png"
          ellipse1="/ellipse-1@2x.png"
          propWidth="350px"
          propFlex="unset"
          propMinWidth="unset"
        />
        <PropertyCard
          propertyImage="/property-image2@2x.png"
          ellipse1="/ellipse-1@2x.png"
          propWidth="350px"
          propFlex="unset"
          propMinWidth="unset"
        />
        <PropertyCard
          propertyImage="/property-image3@2x.png"
          ellipse1="/ellipse-1@2x.png"
          propWidth="350px"
          propFlex="unset"
          propMinWidth="unset"
        />
        <PropertyCard
          propertyImage="/property-image@2x.png"
          ellipse1="/ellipse-1@2x.png"
          propWidth="350px"
          propFlex="unset"
          propMinWidth="unset"
        />
        <PropertyCard
          propertyImage="/property-image4@2x.png"
          ellipse1="/ellipse-11@2x.png"
          propWidth="350px"
          propFlex="unset"
          propMinWidth="unset"
        />
        <PropertyCard
          propertyImage="/property-image5@2x.png"
          ellipse1="/ellipse-11@2x.png"
          propWidth="350px"
          propFlex="unset"
          propMinWidth="unset"
        />
        <PropertyCard
          propertyImage="/property-image6@2x.png"
          ellipse1="/ellipse-11@2x.png"
          propWidth="350px"
          propFlex="unset"
          propMinWidth="unset"
        />
      </div>
    </div>
  );
};

export default PropertiesGridContainer;
