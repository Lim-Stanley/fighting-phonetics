import Correct from "./Correct"
import Incorrect from "./Incorrect"

const Feedback = ({guess, prev, handleGuess, playSound}) => {
    return(
        <div className='feedback'>
            {prev===guess ? <Correct handleGuess={handleGuess} guess={guess} playSound={playSound}/> : 
            <Incorrect guess={guess} prev={prev} handleGuess={handleGuess} playSound={playSound}/>}
        </div>
    )
}
export default Feedback