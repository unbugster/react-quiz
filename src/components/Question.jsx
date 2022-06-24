import Answer from "./Answer";
import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";

const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];

    const selectAnswer = (answerText) => {
        dispatch({ type: 'SELECT_ANSWER', payload: answerText })
    }

    return (
        <div>
            <div className="question">
                {currentQuestion.question}
            </div>
            <div className="answers">
                {quizState.answers.map((answer, index) => (
                    <Answer
                        key={index}
                        index={index}
                        correctAnswer={currentQuestion.correctAnswer}
                        currentAnswer={quizState.currentAnswer}
                        answerText={answer}
                        onSelectAnswer={selectAnswer}
                    />
                ))}
            </div>
        </div>
    );
};

export default Question
