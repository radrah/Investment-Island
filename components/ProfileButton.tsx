import { useState } from "react";
import Profile from "../components/profile/profilePopUp";
import SignUp from "../components/SignUpBox";

export default function ProfileButton() {
  // placeholder boolean user
    const [user, setUser] = useState(false);
    const [toggled, setToggled] = useState(false);
    const buttonText = user ? "Welcome, User!" : "Sign in or Register to view progress!";

    return (
      <>
        <div className="profileButton" onClick={() => setToggled(!toggled)}>
          <div className="profileButtonPic">
            <div className="imageCircle"></div>
          </div>
          <div className="profileButtonWords">
            {buttonText}
          </div>
        </div>

        {user && <Profile open={toggled} setOpen={setToggled} setUser={setUser} />}
        {!user && <SignUp open={toggled} setOpen={setToggled} setUser={setUser} />}
      </>
    );
}