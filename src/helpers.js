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
