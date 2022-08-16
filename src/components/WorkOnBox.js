const WorkOnBox = ({history}) => {
    const getRecs = () => {
      const ans = []
      for (const [key, value] of Object.entries(history)){
        if (value.correct / value.total < .8) {ans.push([key, value.correct, value.total, value.confusedWith])}
      }
      ans.sort((val1, val2) => val1[1] / val1[2] - val2[1] / val2[2] == 0 ? val2[2] - val1[2] : val1[1] / val1[2] - val2[1] / val2[2])
      return ans
    }
    return(
        <div className='to-work-on'>
          <h1 key={-1} className='work-on-title'>To Work On</h1>
          <hr className='work-on-line'/>
          <div className = "trouble-symbols">
            {getRecs().map(([symbol, correct, total, confusedWith], index) => 
            <h1 key={index}>{symbol} : {Math.floor(100 * (correct/ total))}%({correct} / {total})
            <div className='confused'>Confused with: {Array.from(confusedWith).join(', ')}</div></h1>)}
          </div>
        </div>
    )
}

export default WorkOnBox