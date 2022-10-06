//import HomeGridItem from "../components/HomeGridItem";
import Quiz from "../components/quiz";
import IslandImage from "../components/IslandImage";
import Profile from "../components/profilePopUp";

// The main entry point
const Home: NextPage = () => {
@@ -28,6 +29,13 @@ const Home: NextPage = () => {
    <>
      <IslandImage />

      <h2>Profile</h2>
      <Profile
        header="Profile"
        description="This is your profile"
        content={content}
      />

      <h1>Sign up placeholder here:</h1>
      <div>
        <SignUpBox />