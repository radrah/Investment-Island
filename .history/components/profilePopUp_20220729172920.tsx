import type { NextPage } from 'next'
import { ReactElement, useState } from 'react';
import styles from "./profilePopUp.module.css";

// Type definition for the props that are being passed in
interface PopupProps {
    header: string,
    description?: string,
    content?: ReactElement,
    initialToggled?: boolean
}

// Background popup for investment island 
const Popup: NextPage<PopupProps> = props => {
    const { header, description, content, initialToggled } = props;
    const [toggled, setToggled] = useState(initialToggled || false);

    return ( 
        <div className={styles.popup}>
            {/* Content of the pop up */}
            {toggled &&
                <div className={styles.popup_content}>
                    {/* Close button to close the pop up */}
                    <button className={styles.close_button} onClick={() => setToggled(false)}>
                        <span aria-hidden="true" className={styles.close_span} onClick={() => setToggled(false)}> 
                            &times;
                        </span>
                    </button>
                    {/* content begins */}
                    <h1 className={styles.header}>{header}</h1>
                    <hr className={styles.separator}/>
                    <p className={styles.description}>{description}</p>
                    {content}
                </div>
            }

            {!toggled &&
                <button onClick={() => setToggled(!toggled)}>Click to toggle popup!</button>
            }
               
        </div>
    );
}

export default Popup;