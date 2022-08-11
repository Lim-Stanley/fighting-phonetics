import Correct from "./Correct"
import Incorrect from "./Incorrect"

const Feedback = ({guess, prev, updateWeights}) => {
    return(
        <>
            <h1>This is Feedback</h1>
            {prev===guess ? <Correct updateWeights={updateWeights} guess={guess} /> : 
            <Incorrect guess={guess} prev={prev} updateWeights={updateWeights}/>}
        </>
    )
}
export default Feedback