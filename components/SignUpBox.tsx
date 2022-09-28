import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import {TextField} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LockPersonIcon from '@mui/icons-material/LockPerson';

import createUser, {
  createFacebookUser,
  createUserGoogle,
} from "../firebase/authCreateUser";
import { useState } from "react";
import styles from "./SignUpBox.module.css";

export default function SignUpBox() {
  // pop up handler
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // sign in handler
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    createUser(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      // replace with sign up button
      <Button className={styles.signup_button} onClick={handleOpen}>Sign in</Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.popup}>
          <div className={styles.credentials_box}>
          <span className={styles.dot}>
            <Avatar className={styles.avatar} src="/broken-image.jpg" />
          </span>
            <Typography>
              {/* credentials */}
            {/* <TextField id="filled-basic" className={styles.input_field} label="Username" variant="filled" size="small"/>
            <TextField id="filled-basic" label="Password" variant="filled" size="small"/> */}
            <input type="text" className={styles.input_field} placeholder='Username'>
            </input>
            <input type="password" className={styles.input_field} placeholder='Password'></input>
            <p>Don't have an account?</p>
            <p id="cursor">Register here!</p>
            </Typography>
          </div>

          <Button variant="contained" className={styles.button}>
            <GoogleIcon/> Sign in with Google
          </Button>
          <Button variant="contained" className={styles.button}>
            <FacebookRoundedIcon/>Sign in with Facebook
          </Button>
        </div>
      </Modal>
      {/* <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
      />
      <br />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
      />
      <br />
      <button onClick={handleSignIn}>Sign Up</button>
      <button
        onClick={() => {
          createUserGoogle();
        }}
      >
        Sign Up With Google
      </button>
      <button
        onClick={() => {
          createFacebookUser();
        }}
      >
        Sign Up With Facebook
      </button> */}
    </div>
  );
}
