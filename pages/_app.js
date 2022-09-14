import "../styles/globals.css";
import { useEffect } from "react";
import { getDocs } from "firebase/firestore";
import initFirebase from "../firebase/clientApp";
import { RecoilRoot } from "recoil";

export default function MyApp({ Component, pageProps }) {
  initFirebase();
  return <RecoilRoot><Component {...pageProps} /></RecoilRoot>;
}
