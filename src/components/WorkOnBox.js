const WorkOnBox = ({history}) => {
    const getRecs = () => {
      const ans = []
      for (const [key, value] of Object.entries(history)){
        if (value.correct / value.total < .8) {ans.push([key, value.correct, value.total, value.confusedWith])}
      }
      console.log(ans)
      // If ans is none, display "start training" or something
      return ans
    }
    return(
        <div className='to-work-on'>
          <h1 key={-1} className='work-on-title'>To Work On</h1>
          <hr className='work-on-line'/>
          <div className = "trouble-symbols">
            {getRecs().map(([symbol, correct, total, confusedWith], index) => 
            <h1 key={index}>{symbol} : {Math.floor(100 * (correct/ total))}% ({correct} / {total})
            <h4 class='confused'>Confused with:
            {Array.from(confusedWith).join(', ')}</h4></h1>)}
          </div>
        </div>
    )
}

export default WorkOnBox