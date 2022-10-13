import "../styles/globals.css";
import { useEffect } from "react";
import { getDocs } from "firebase/firestore";
import initFirebase from "../firebase/clientApp";
import { RecoilRoot } from "recoil";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      '"Baloo 2"',
      '-apple-system', 
      'BlinkMacSystemFont', 
      'Segoe UI', 
      'Roboto', 
      'Oxygen',
      'Ubuntu', 
      'Cantarell', 
      'Fira Sans', 
      'Droid Sans', 
      'Helvetica Neue', 
      'sans-serif'
    ].join(','),
  },
});

export default function MyApp({ Component, pageProps }) {
  initFirebase();
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </ThemeProvider>
  );
}
