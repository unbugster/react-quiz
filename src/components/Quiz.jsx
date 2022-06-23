import { useContext } from "react"
import { QuizContext } from "../contexts/quiz"
import Question from "./Question"

const Quiz = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div className="quiz">
            <div className="score">
                Question {quizState.currentQuestionIndex + 1}\{quizState.questions.length}
            </div>
            <Question />
            <div
                className="next-button"
                onClick={() => dispatch({ type: 'NEXT_QUESTION' })}
            >Next question</div>
        </div >
    );
}
export default Quiz;
