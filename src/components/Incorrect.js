import audioIconGreen from '../images/audio-icon-green.png'
import audioIconRed from '../images/audio-icon-red.png'

const Incorrect = ({prev, guess, handleGuess, playSound}) => {
    return (
        <>
            <div className='bad-message'>Incorrect!</div>
            <div className='bad-answers'>
                <div className='bad-answer selected' onClick={() => playSound(guess)}>
                    Selected:<br />{guess}
                    <img draggable={false} className='audio-icon' src={audioIconRed} alt='audio-icon' />
                </div>
                <div className='bad-answer answer' onClick={() => playSound(prev)}>
                    Answer:<br />{prev}
                    <img draggable={false} className='audio-icon' src={audioIconGreen} alt='audio-icon' />
                </div>
            </div>
            <div className='bad-continue' onClick={() => handleGuess(prev, 3, false, guess)}>Keep Practicing {'-->'}</div>
        </>
    )
}
export default Incorrect