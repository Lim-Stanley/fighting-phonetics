const Incorrect = ({prev, guess, handleGuess}) => {
    return (
        <>
            <div className='bad-message'>Incorrect!</div>
            <div className='bad-answers'>
                <div className='bad-answer selected'>Selected:<br />{guess}</div>
                <div className='bad-answer answer'>Answer:<br />{guess}</div>
            </div>
            <h2 onClick={() => handleGuess(prev, 3, false, guess)}>Keep Practicing {'-->'}</h2>
        </>
    )
}
export default Incorrect