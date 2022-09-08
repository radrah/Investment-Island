import type { NextPage } from "next";
import { ReactElement, useState } from "react";
import { Button } from "@mui/material";
import styles from "./MCQpopup.module.css";
import quizData from "./quiz.json";

// Type definition for the props that are being passed in
interface MCQprops {
  header: string;
  description?: string;
  content?: ReactElement;
  initialToggled?: boolean;
}

// Background popup for investment island
const MCQpopup: NextPage<MCQprops> = (props) => {
  const { header, description, content, initialToggled } = props;
  const [toggled, setToggled] = useState(initialToggled || false);

  const questions = quizData;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect: boolean) => {
    if (isCorrect == true) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className={styles.popup}>
      {toggled && (
        <div className={styles.popup_content}>
          <button
            className={styles.close_button}
            onClick={() => setToggled(false)}
          >
            <span
              aria-hidden="true"
              className={styles.close_span}
              onClick={() => setToggled(false)}
            >
              &times;
            </span>
          </button>
          <h1 className={styles.header}>{header}</h1>
          <hr className={styles.separator} />
          <p className={styles.description}>{description}</p>
          {/* SECTION START */}
          <div className="quiz">
            {showScore ? (
              <div className="score-section">
                You scored {score} out of {questions.length}
              </div>
            ) : (
              <>
                <div className="question-section">
                  <div className="question-count">
                    <span>Question {currentQuestion + 1}</span>/
                    {questions.length}
                  </div>
                  <div className="question-text">
                    {questions[currentQuestion].questionText}
                  </div>
                </div>
                <div className={styles.options_container}>
                  {questions[currentQuestion].answerOptions.map(
                    (answerOption) => (
                      <Button
                        className={styles.option_button}
                        variant="outlined"
                        onClick={() =>
                          handleAnswerButtonClick(answerOption.isCorrect)
                        }
                      >
                        {answerOption.answerText}
                      </Button>
                    )
                  )}
                </div>
              </>
            )}
          </div>
          {/* SECTION END */}
          <div className={styles.nav_buttons_container}>
            <Button className={styles.nav_button}>Prev.</Button>
            <Button className={styles.nav_button}>Next</Button>
          </div>
          {content}
        </div>
      )}

      {
        <button onClick={() => setToggled(!toggled)}>
          Click to toggle popup!
        </button>
      }
    </div>
  );
};

export default MCQpopup;
