import type { NextPage } from "next";
import { ReactElement, useState } from "react";
import styles from "./profilePopUp.module.css";
import { Grid } from "@mui/material";
import { LinearProgress } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

// Type definition for the props that are being passed in
interface ProfileProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<boolean>>;
}

{
  /* Profile: image, name, email, log out, progress bar (shows progress through modules) */
}

// Background popup for investment island
const Popup: NextPage<ProfileProps> = (props) => {
  const {open, setOpen, setUser} = props;

  // const [progress, setProgress] = React.useState(100);
  const progressNumber = 50;

  const content = (
    <>
      {/* WRITE THE HTML FOR PROFILE HERE */}
      <Grid container spacing={1}>
        {/* Left */}
        <Grid item xs={4} style={{ background: "LightGrey" }}>
          <img src="/assets/static/profile.png" alt="Profile picture"></img>
        </Grid>
        {/* Right */}
        <Grid item xs={8} style={{ background: "Grey" }}>
          {/* Name */}
          <p>Name</p>
          <Grid item xs={8} style={{ background: "White" }}>
            <p> John </p>
          </Grid>
          {/* Email */}
          <p>Email</p>
          <Grid item xs={8} style={{ background: "White" }}>
            <p> Example@email.com </p>
          </Grid>
          {/* Progress bar */}
          <p>Progress</p>
          <Grid item xs={8} style={{ background: "White" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ width: "100%", mr: 1 }}>
                <LinearProgress variant="determinate" value={progressNumber} />
              </Box>
              <Box sx={{ minWidth: 35 }}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                >{`${Math.round(progressNumber)}%`}</Typography>
              </Box>
            </Box>
          </Grid>
          {/* Change password */}
          <p>Change password</p>
          <Grid item xs={8} style={{ background: "White" }}>
            <p> Enter new password </p>
          </Grid>
          {/* Log out button */}
          <button onClick={() => {
            setUser(false);
            setOpen(false);
            }}>Log out!</button>
        </Grid>
      </Grid>
    </>
  );

  return (
    <div>
      <div className={styles.popup}>
        {open && (
          <div className={styles.popup_content}>
            <button
              className={styles.close_button}
              onClick={() => setOpen(false)}
            >
              <span
                aria-hidden="true"
                className={styles.close_span}
                onClick={() => setOpen(false)}
              >
                &times;
              </span>
            </button>
            <h1 className={styles.header}>Profile Page</h1>
            <hr className={styles.separator} />
            <p className={styles.description}>Test description for profile</p>
            {content}
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;
