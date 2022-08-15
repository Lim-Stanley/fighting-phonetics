import Correct from "./Correct"
import Incorrect from "./Incorrect"

const Feedback = ({guess, prev, handleGuess}) => {
    return(
        <div className='feedback'>
            {prev===guess ? <Correct handleGuess={handleGuess} guess={guess}/> : 
            <Incorrect guess={guess} prev={prev} handleGuess={handleGuess} />}
        </div>
    )
}
export default Feedback