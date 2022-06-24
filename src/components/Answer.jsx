const Answer = ({
    answerText,
    onSelectAnswer,
    index,
    currentAnswer,
    correctAnswer
}) => {
    const letterMapping = ['A', 'B', 'C', 'D'];
    const isCorrecttAnswer = currentAnswer && answerText === correctAnswer;
    const isWrongAnswer = currentAnswer === answerText && currentAnswer !== correctAnswer;
    const correctAswerClass = isCorrecttAnswer ? 'correct-answer' : '';
    const wrongAnswerClass = isWrongAnswer ? 'wrong-answer' : '';
    const disabledClass = currentAnswer ? 'disabled-answer' : '';

    return (
        <div
            className={`answer
             ${correctAswerClass} 
             ${wrongAnswerClass}
              ${disabledClass}`
            }
            onClick={() => onSelectAnswer(answerText)}
        >
            <div className="answer-letter">{letterMapping[index]}</div>
            <div className="answer-text">{answerText}</div>
        </div>
    )
}

export default Answer
