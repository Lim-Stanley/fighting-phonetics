const Correct = ({guess, updateWeights}) => {
    return (
        <>
            <h1>Correct!</h1>
            <h2>The answer is:</h2>
            <h2>{guess}</h2>
            <h2>How did you feel about this symbol?</h2>
            <h3 onClick={() => updateWeights(guess, 1)}>Good</h3>
            <h3 onClick={() => updateWeights(guess, 2)}>Alright</h3>
            <h3 onClick={() => updateWeights(guess, 3)}>Bad</h3>
        </>
    )
}
export default Correct