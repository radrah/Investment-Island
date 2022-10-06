import type { NextPage } from "next";
import { useRecoilState } from "recoil";
import { currentPageState } from "../atoms/currentPageState";
import moduleContent from "../moduleContent.js";
import styles from "./popupComponent.module.css";

// Background popup for investment island
const ModulePopup: NextPage = () => {
  const [currentModule, setCurrentModule] = useRecoilState(currentPageState);
  if (currentModule > 0) {
    const module = findId(moduleContent, currentModule);
    return (
      <div className={styles.popup}>
        <div className={styles.popup_content}>
          <button
            className={styles.close_button}
            onClick={() => setCurrentModule(0)}
          >
            <span
              aria-hidden="true"
              className={styles.close_span}
              onClick={() => setCurrentModule(0)}
            >
              &times;
            </span>
          </button>
          <h4>{module.header}</h4>
          <p>{module.body}</p>
          {currentModule > 1 && (
            <button
              onClick={() => {
                setCurrentModule((i) => i - 1);
              }}
            >
              prev
            </button>
          )}
          {currentModule < 28 && (
            <button
              onClick={() => {
                setCurrentModule((i) => i + 1);
              }}
            >
              next
            </button>
          )}
        </div>
      </div>
    );
  }
  return <></>;
};

export default ModulePopup;

// Returns specific module's object based on id
const findId = (data: any[], id: number) => {
  for (var module of data) {
    if (module.id == id) {
      return module;
    }
  }
};
