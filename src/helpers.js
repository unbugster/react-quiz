export const shuffleAnswers = (question) => {
    const unshuffledAnswers = [
        question.correctAnswer,
        ...question.incorrectAnswers
    ];

    const shuffledAnswers = unshuffledAnswers
        .map((unshuffledAnswer) => {
            return ({
                sort: Math.random(),
                value: unshuffledAnswer,
            })
        })
        .sort((a, b) => a.sort - b.sort)
        .map(el => el.value)

    return shuffledAnswers;
};

export const normalizeQuestions = backendQuestions => {
    return backendQuestions.map((backendQuestion) => {
        const incorrectAnswers = backendQuestion.incorrect_answers
            .map(incorrectAnswer => decodeURIComponent(incorrectAnswer));

        return {
            correctAnswer: decodeURIComponent(backendQuestion.correct_answer),
            question: decodeURIComponent(backendQuestion.question),
            incorrectAnswers
        }
    })
}