import type { NextPage } from "next";
import { ReactElement, useState } from "react";
import styles from "./profilePopUp.module.css";
import PopupComponent from "./popupComponent";
import { Grid } from "@mui/material";

// import ProfilePicture from "";

// Type definition for the props that are being passed in
interface PopupProps {
    header: string,
    description?: string,
    content?: ReactElement,
    initialToggled?: boolean
}

{
  /* Profile: image, name, email, log out, progress bar (shows progress through modules) */
}

// Background popup for investment island
const Popup: NextPage = (props) => {
  const content = (
    <>
      {/* WRITE THE HTML FOR PROFILE EHRE */}
      <p>Testing</p>
      <h2> THIS IS PROFILE</h2>
      {/* Format 1 */}
      <Grid container spacing={1}>
        <Grid item xs={4} style={{ background: "LightGrey" }}>
          <img src="../public/assets/profile.png" alt="Profile picture"></img>
        </Grid>
        <Grid item xs={8} style={{ background: "Grey" }}>
          <h3>Name</h3>
          <h4>Email</h4>
          <p>Progress bar</p>
          <button onClick={() => {}}>Log out!</button>
        </Grid>
      </Grid>
    </>
  );
  // const { header, description, content, initialToggled } = props;
  // const [toggled, setToggled] = useState(initialToggled || false);

  return (
    <div>
      <PopupComponent
        header="Profile Page"
        description="Test description for profile"
        content={content}
        initialToggled={true}
      />
    </div>
  );
};

export default Popup;
