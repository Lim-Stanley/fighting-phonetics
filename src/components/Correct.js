const Correct = ({guess, handleGuess}) => {
    return (
        <>
            <div className='good-message'>Correct! How do you feel?</div>
            <div className='good-answer'>Answer:<br />{guess}</div>
            <div className='user-feedback-bar'>
                <div className='user-feedback good' onClick={() => handleGuess(guess, 1)}>
                    Feeling Great!
                    <h5>(Confident)</h5>
                </div>
                <div className='user-feedback medium' onClick={() => handleGuess(guess, 2)}>
                    Felt alright!
                    <h5>(Not fully confident)</h5>
                </div>
                <div className='user-feedback bad' onClick={() => handleGuess(guess, 3)}>
                    Give me more!
                    <h5>(Unconfident)</h5>
                </div>
            </div>
        </>
    )
}
export default Correct