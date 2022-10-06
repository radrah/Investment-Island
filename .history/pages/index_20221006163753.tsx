import type { NextPage } from "next";
import { Grid } from "@mui/material";

import Link from "next/link";
import styles from "../styles/Home.module.css";
import Welcome from "../components/popupComponent";
import SignUpBox from "../components/SignUpBox";
//import HomeGridItem from "../components/HomeGridItem";
import Profile from "../components/profilePopUp";
import HomeGrid from "../components/HomeGrid";
import { useRecoilState } from "recoil";
import { currentPageState } from "../atoms/currentPageState";
import ModulePopup from "../components/ModulePopup";
//import HomeGridItem from "../components/HomeGridItem";

import Quiz from "../components/quiz";
import IslandImage from "../components/IslandImage";

// The main entry point
const Home: NextPage = () => {
  const [currentModule, setCurrentModule] = useRecoilState(currentPageState);

  const content = (
    <>
      <Link href="/disclaimer">
        <a>Next</a>
      </Link>
    </>
  );

  return (
    // Home page is here - currently all placeholder buttons and stuff until we get the art
    <>
      {/* Make button for profile here */}

      <div className="profileButton">
        <div className="profileButtonPic">
          <div className="imageCircle"></div>
        </div>
        <div className="profileButtonWords">
          Sign in or Register to view progress!
        </div>
      </div>

      <h2>Profile</h2>
      <Profile
        header="Profile"
        description="This is your profile"
        content={content}
        initialToggled={false}
      />

      <IslandImage />

      <h1>Sign up placeholder here:</h1>
      <div>
        <SignUpBox />
      </div>
      <div>
        <h1>Welcome page and disclaimer placeholder here</h1>
        <Welcome
          header="Welcome to Investment Island!"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci urna, dignissim non egestas id, lobortis ut erat. Aliquam erat volutpat. Nam eget ultrices metus. Mauris id venenatis dolor, at molestie risus. Etiam vitae diam purus. Proin non facilisis purus. Fusce id mauris vitae quam fringilla rhoncus a a dui. Cras id dignissim leo, fringilla accumsan sapien.
        Nunc pellentesque ante lorem, sed sodales ex lacinia et. Quisque vehicula justo porttitor arcu rhoncus suscipit. Aliquam lobortis ex scelerisque ipsum aliquam, sed tempor neque lobortis. Etiam sit amet nulla ligula. Nulla eget finibus dui. Fusce nec eleifend ante. Aenean sit amet sem ut odio dignissim gravida et et metus. Maecenas eu eleifend metus. Aenean lobortis lorem mi, sed scelerisque magna ultrices feugiat. 
        Integer posuere lorem pharetra placerat egestas."
          content={content}
        />
      </div>

      <HomeGrid></HomeGrid>
      <ModulePopup></ModulePopup>
    </>
  );
};

export default Home;
