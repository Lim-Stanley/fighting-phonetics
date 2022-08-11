import Correct from "./Correct"
import Incorrect from "./Incorrect"

const Feedback = ({guess, prev, handleGuess}) => {
    return(
        <>
            <h1>This is Feedback</h1>
            {prev===guess ? <Correct handleGuess={handleGuess} guess={guess}/> : 
            <Incorrect guess={guess} prev={prev} handleGuess={handleGuess} />}
        </>
    )
}
export default Feedback