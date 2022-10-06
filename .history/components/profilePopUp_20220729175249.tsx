import type { NextPage } from 'next'
import { ReactElement, useState } from 'react';
import styles from "./profilePopUp.module.css";
import PopupComponent from "./popupComponent";

// Type definition for the props that are being passed in
// interface PopupProps {
//     header: string,
//     description?: string,
//     content?: ReactElement,
//     initialToggled?: boolean
// }

{/* Profile: image, name, email, log out, progress bar (shows progress through modules) */}

// Background popup for investment island 
const Popup: NextPage = props => {
    const content = (
        <>
            <p>Testing</p> 
        </>
    );
    // const { header, description, content, initialToggled } = props;
    // const [toggled, setToggled] = useState(initialToggled || false);

    return ( 
        <div>
            <PopupComponent header="Profile Page" description="Test description for profile" content={content} initialToggled={true} />
               
        </div>
    );
}

export default Popup;