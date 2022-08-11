const Incorrect = ({prev, guess, handleGuess}) => {
    return (
        <>
            <h1>Incorrect!</h1>
            <h2>You thought it was:</h2>
            <h2>{guess}</h2>
            <h2>Answer:</h2>
            <h2>{prev}</h2>
            <h2 onClick={() => handleGuess(prev, 3, false)}>Keep Practicing</h2>
        </>
    )
}
export default Incorrect