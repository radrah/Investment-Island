import type { NextPage } from 'next'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';

import createUser, {
  createFacebookUser,
  createUserGoogle,
} from "../firebase/authCreateUser";
import { useState } from "react";
import styles from "./SignUpBox.module.css";
import { setUserId } from 'firebase/analytics';

interface SignUpBoxProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUpBox: NextPage<SignUpBoxProps> = props => {
  // pop up handler
  const {open, setOpen, setUser} = props;
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // sign in handler
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handleSignIn = () => {
  //   createUser(email, password);
  //   setEmail("");
  //   setPassword("");
  // };

  // placeholder user
  let user;

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.popup}>
          <div className={styles.credentials_box}>
            <img className={styles.avatar} src="assets/static/user.png"></img>
            <div className={styles.input_box}>
              <img src="assets/static/mini_user.png" className={styles.credentials_icon}></img>
                <TextField variant="standard" placeholder="Username" className={styles.input_field} 
                  sx={{
                    input: {
                      fontWeight: 600,
                      fontSize: '1.2rem',
                      "&::placeholder": {
                        fontWeight: 600,
                        fontSize: '1.2rem',
                        opacity: 1,
                        color: 'white'
                      },
                    }
                  }}
                  InputProps={{disableUnderline: true}}
                />
              </div>
              <div className={styles.input_box}>
                <img src="assets/static/padlock.png" className={styles.credentials_icon}></img>
                <TextField variant="standard" type="password" placeholder="Password" className={styles.input_field} 
                  sx={{
                    input: {
                      fontWeight: 600,
                      fontSize: '1.2rem',
                      "&::placeholder": {
                        fontWeight: 600,
                        fontSize: '1.2rem',
                        opacity: 1,
                        color: 'white'
                      },
                    }
                  }}
                  InputProps={{disableUnderline: true}}
                />
            </div>
            <div>
              <Typography display="inline" sx={{ fontSize: '1.2rem' }}>Don't have an account? </Typography>
              <Link
                component="button"
                variant="body1"
                color="#0077B6"
                display="inline"
                onClick={() => { }}
                sx={{
                  fontWeight: 600,
                  fontSize: '1.2rem'
                }}
              >
                Register here!
              </Link>
            </div>
            <Button onClick={() => {setUser(true); setOpen(false);}} className={styles.sign_in_button}>Sign in</Button>
          </div>

          <Button variant="contained" className={styles.sign_in_with_button}>
          <img src="assets/static/google.png" className={styles.logo}></img><span>Sign in with Google</span>
          </Button>
          <Button variant="contained" className={styles.sign_in_with_button}>
            <img src="assets/static/facebook.png" className={styles.logo}></img><span>Sign in with Facebook</span>
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

export default SignUpBox;
