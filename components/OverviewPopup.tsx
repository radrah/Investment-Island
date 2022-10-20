import type { NextPage } from "next";
import { ReactElement, useState } from "react";
import styles from "./popupComponent.module.css";
import Button from "@mui/material/Button";

// Type definition for the props that are being passed in
interface PopupProps {
  header: string;
  description?: string;
  content?: ReactElement;
  initialToggled?: boolean;
}

// Background popup for investment island
const Popup: NextPage<PopupProps> = (props) => {
  const { header, description, content, initialToggled } = props;
  const [toggled, setToggled] = useState(initialToggled || false);

  return (
    <div className={styles.popup}>
      {toggled && (
        <div className={styles.popup_content}>
          <button
            className={styles.close_button}
            onClick={() => setToggled(false)}
          >
            <span
              aria-hidden="true"
              className={styles.close_span}
              onClick={() => setToggled(false)}
            >
              &times;
            </span>
          </button>
          <h1 className={styles.header}>{header}</h1>
          <hr className={styles.separator} />
          <p className={styles.description}>{description}</p>
        </div>
      )}

      {/* {!toggled && (
        <>
          <Button
            onClick={() => {
              setToggled(!toggled);
            }}
          >
            Click to toggle popup!
          </Button>
        </>
      )} */}
      {/* 
      <path
        onClick={() => {
          alert("nothing");
        }}
        className="island-section-svg"
        id="property-plains-svg"
        d="m 432.33719,915.41818 c -231.39174,54.80331 -231.39174,54.80331 -231.39174,54.80331 l -38.56528,71.04131 -12.17852,58.8628 192.82645,52.7736 79.16033,-24.3571 121.78512,2.0298 97.4281,40.595 259.80827,16.2381 -36.53554,-66.9819 105.54711,-93.3686 -16.23802,-64.95202 26.38678,-46.6843 -73.07108,-36.53554 -26.38677,-26.38677 -54.80331,-4.05951 -22.32727,26.38678 -140.05289,6.08926 -213.12397,-62.92232 -32.47603,54.80331 z"
      /> */}
    </div>
  );
};

export default Popup;
