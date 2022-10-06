import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link'

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
              <img className={styles.avatar} src="assets/static/user.png"></img>
              <div className={styles.input_field}>
                <img src="assets/static/mini_user.png" className={styles.credentials_icon}></img>
                <TextField variant="standard" placeholder="Username" size="small"  
                InputProps={{disableUnderline: true}}/>
              </div>
              <div className={styles.input_field}>
              <img src="assets/static/padlock.png" className={styles.credentials_icon}></img>
                <TextField variant="standard" placeholder="Password" size="small"              
                InputProps={{disableUnderline: true}}/>
              </div>
              <Typography>Don't have an account?</Typography>
              <Link component="button" onClick={() => {}}>Register here!</Link>
          </div>

          <Button variant="contained" className={styles.button}>
          <img src="assets/static/google.png" className={styles.logo}></img><span>Sign in with Google</span>
          </Button>
          <Button variant="contained" className={styles.button}>
          <img src="assets/static/facebook.png" className={styles.logo}></img><span>Sign in with Facebook</span>
          </Button>
        </div>
      </Modal>
      /* <input
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
      </button> */
    </div>
  );
}
