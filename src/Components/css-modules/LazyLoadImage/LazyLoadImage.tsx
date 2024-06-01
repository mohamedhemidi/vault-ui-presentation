import React, { useState } from "react";
import { base64 } from "./base64";
import styles from "./styles.module.css";

type Props = {
  src: string;
  alt?: string;
  fallbackImage?: string;
  borderRadius?: string;
};

const LazyLoadImage = ({ src, alt, fallbackImage, borderRadius }: Props) => {
  const [loaded, setLoaded] = useState(false);

  const blurClass = `
    ${loaded ? styles["loaded"] : ""}
  `.trim();

  function setStyles() {
    const styles = {};
    if (fallbackImage) {
      Object.assign(styles, { backgroundImage: `url(${fallbackImage})` });
    } else {
      Object.assign(styles, { backgroundImage: `url(${base64})` });
    }

    if (borderRadius) {
      Object.assign(styles, { borderRadius: `${borderRadius}` });
    } else {
      Object.assign(styles, { borderRadius: "0" });
    }

    return styles;
  }

  return (
    <div className={`${styles.BlurLoad} ${blurClass}`} style={setStyles()}>
      <img
        onLoad={() => setLoaded(true)}
        src={src}
        loading="lazy"
        alt={alt}
        style={{ borderRadius: `${borderRadius}` }}
      />
    </div>
  );
};

export default LazyLoadImage;
