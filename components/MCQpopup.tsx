import type { NextPage } from "next";
import { ReactElement, useState } from "react";
import { Button, Grid } from "@mui/material";
import styles from "./MCQpopup.module.css";
import quizData from "./quiz.json";
import { useRecoilState } from "recoil";
import { currentPageState } from "../atoms/currentPageState";

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
  const initialAnswerArray = new Array(questions.length).fill(0);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [answerArray, setAnswerArray] = useState(initialAnswerArray);

  // Update the answer array element corresponding to the current quesiton
  const updateAnswerArray = (change: number) => {
    setAnswerArray((answerArray) => {
      return [
        ...answerArray.slice(0, currentQuestion),
        answerArray[currentQuestion] + change,
        ...answerArray.slice(currentQuestion + 1),
      ];
    });
  };

  const handleAnswerButtonClick = (isCorrect: boolean) => {
    // Selected right answer for first time
    if (isCorrect == true && answerArray[currentQuestion] == 0) {
      setScore(score + 1);
      updateAnswerArray(1);
      // Selected wrong answer after selecting right answer first
    } else if (isCorrect == false && answerArray[currentQuestion] == 1) {
      setScore(score - 1);
      updateAnswerArray(-1);
    }
  };

  const handleRestartButtonClick = () => {
    setScore(0);
    setCurrentQuestion(0);
    setAnswerArray(initialAnswerArray);
    setShowScore(false);
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
              // Score page
              <div className={styles.score_section}>
                <p>
                  You scored {score} out of {questions.length}
                </p>
                <br></br>
                <div className={styles.results}>
                  <p>Results:</p>
                  {/* Display results for each question */}
                  {answerArray.map((answerNumber, index) => {
                    return answerNumber == 0 ? (
                      <p className={styles.incorrect}>
                        Q{index + 1} : incorrect
                      </p>
                    ) : (
                      <p className={styles.correct}>Q{index + 1} : correct</p>
                    );
                  })}
                </div>
                {/* Restart button */}
                <Button
                  className={styles.option_button}
                  variant="outlined"
                  onClick={handleRestartButtonClick}
                >
                  Restart
                </Button>
              </div>
            ) : (
              // Question page
              <>
                <div className="question-section">
                  {/* Question number and text*/}
                  <div className={styles.question_text}>
                    <span>Q{currentQuestion + 1}</span>/{questions.length}:{" "}
                    {questions[currentQuestion].questionText}
                  </div>
                </div>
                <Grid container className={styles.main_grid}>
                  <Grid item xs={6}>
                    <p>test</p>
                  </Grid>
                  {/* Answer options */}
                  <Grid item xs={6}>
                    {questions[currentQuestion].answerOptions.map(
                      (answerOption) => (
                        <Grid>
                          <Button
                            className={styles.option_button}
                            variant="outlined"
                            onClick={() =>
                              handleAnswerButtonClick(answerOption.isCorrect)
                            }
                          >
                            {answerOption.answerText}
                          </Button>
                        </Grid>
                      )
                    )}
                    {/* Question navigation buttons */}
                    {/* Back question button */}
                    <div className={styles.nav_buttons_container}>
                      {showScore == false &&
                        (currentQuestion > 0 ? (
                          <Button
                            className={styles.nav_button}
                            onClick={() => {
                              setCurrentQuestion((i) => i - 1);
                            }}
                          >
                            &lt; Back
                          </Button>
                        ) : (
                          <Button className={styles.nav_button} disabled={true}>
                            &lt; Back
                          </Button>
                        ))}
                      {/* Next question button */}
                      {showScore == false &&
                        (currentQuestion < questions.length - 1 ? (
                          <Button
                            className={styles.nav_button}
                            onClick={() => {
                              setCurrentQuestion((i) => i + 1);
                            }}
                          >
                            Next &gt;
                          </Button>
                        ) : (
                          <Button
                            className={styles.nav_button}
                            onClick={() => {
                              setShowScore(true);
                            }}
                          >
                            Finish &gt;
                          </Button>
                        ))}
                    </div>
                  </Grid>
                </Grid>
              </>
            )}
          </div>
          {/* SECTION END */}
          {content}
        </div>
      )}

      {
        <button onClick={() => setToggled(!toggled)}>
          Click to toggle quiz!
        </button>
      }
    </div>
  );
};

export default MCQpopup;
