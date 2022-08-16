
import {useState} from 'react'
import Table from "../components/Table";
import WorkOnBox from '../components/WorkOnBox';
import Feedback from "../components/Feedback"
import TopBar from '../components/TopBar';
import PlayButton from '../images/play_button.png'
import GrayedButton from '../images/grayed_button.png'
import {sound} from '../commons/Sounds'

const IntCons = () => {
    const headings = ['Bilabial', 'Labio-Dental', 'Dental', 'Alveolar', 'Post-Alveolar', 'Retroflex', 
    'Palatal', 'Velar', 'Uvular', 'Pharyngeal', 'Glottal']
    const headers = ['Stops', 'Nasal', 'Trill', 'Tap or Flap', 'Fricative', 'Lateral Fricative', 'Approximant', 'Lateral Approximant']
    const rows = [
      ['p', 'b', '', '', '', '', 't', 'd', '', '', 'ʈ', 'ɖ', 'c', 'ɟ', 'k', 'g', 'q', 'ɢ', '','', 'ʔ', ''],
      ['', 'm', '', 'ɱ', '', '', '', 'n', '', '', '', 'ɳ', '', 'ɲ', '', 'ŋ', '', 'ɴ', '','', '', ''],
      ['', 'ʙ', '', '', '', '', '', 'r', '', '', '', '', '', '', '', '', '', 'ʀ', '','', '', ''],
      ['', '', '', 'ⱱ', '', '', '', 'ɾ', '', '', '', 'ɽ', '', '', '', '', '', '', '', '', '', ''],
      ['ɸ', 'β', 'f', 'v', 'θ', 'ð', 's', 'z', 'ʃ', 'ʒ', 'ʂ', 'ʐ', 'ç', 'ʝ', 'x', 'ɣ', 'χ', 'ʁ', 'ħ', 'ʕ', 'h', 'ɦ'],
      ['', '', '', '', '', '', 'ɬ', 'ɮ', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', 'w', '', 'ʋ', '', '', '', 'ɹ', '', '', '', 'ɻ', '', 'j', '', 'ɰ', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', 'l', '', '', '', 'ɭ', '', 'ʎ', '', 'ʟ', '', '', '', '', '', '']
]
    const cols = rows[0].map((_, colIndex) => rows.map(row => row[colIndex]));
    
    const initHistory = () => {
      let ans = {}
      rows.forEach(row => row.forEach(elem => elem != '' ? ans[elem] = {correct: 0, total: 0, weight: 3, confusedWith : new Set()}
       : null))
      return ans
    }

    const [prev, setPrev] = useState(null)
    const [guess, setGuess] = useState(false)
    const [showFeedback, setShowFeedback] = useState(false)
    const [selected, setSelected] = useState({rows: [], cols: []})
    const [hovering, setHovering] = useState({row: -2, col: -2})
    const [history, setHistory] = useState(initHistory())

    // Select all
    const selectAll = () => {
      if (selected.rows.length == rows.length || selected.cols.length == cols.length){
        setSelected({rows: [], cols: []})
      }
      else{
        setSelected({rows: Array.from(Array(rows.length).keys()),
          cols: Array.from(Array(cols.length).keys())
        })
      }
    }

    // Toggles a selected row on or off
    const toggle = (isRow, index) => {
      if (!isRow) {
        if (selected.cols.includes(index * 2)){
          setSelected({...selected, cols : selected.cols.filter(col => col != index * 2 && col != index * 2 + 1)})}
        else{ setSelected({...selected, cols : [...selected.cols, index * 2, index * 2 + 1]})}
      }
      else{
        if (selected.rows.includes(index)){ setSelected({...selected, rows : selected.rows.filter(row => row != index)})}
        else{ setSelected({...selected, rows: [...selected.rows, index]})}
      }
    }

    // Return whether a col or row is selected or not
    const inSelected = (isRow, index) => {
      if (isRow){ return selected.rows.includes(index) }
      else{ return selected.cols.includes(index) }
    }

    const isHovering = (isRow, index) => {
      if (isRow){ return hovering.row == index }
      else{ return hovering.col == index }
    }

    const getSymbol = () => {
      if (!selected.rows && !selected.cols){return}
      const s = new Set()
      selected.rows.forEach((ind) => rows[ind].forEach(elem => s.add(elem)))
      selected.cols.forEach((ind) => cols[ind].forEach(elem => s.add(elem)))
      s.delete('')
      if (s.size === 1) {return}
      const vals = []
      s.forEach(elem => Array.from(Array(history[elem].weight).keys()).forEach(() => vals.push(elem)))
      let ans = vals[Math.floor(Math.random() * vals.length)]
      while (ans === prev && prev !== null){
        ans = vals[Math.floor(Math.random() * vals.length)]
      }
      return ans
    }

    // Play the selected sound
    let canPlay = true
    const playSound = () => {
        console.log(canPlay, answer)
      if (!canPlay) {return}
      canPlay = false
      new Audio(sound[answer]).play()
      setTimeout(() => canPlay = true, 1000)
    }

    let canPlayInput = true
    const playSoundInput = (symbol) => {
      if (!canPlayInput) {return}
      canPlayInput = false
      new Audio(sound[symbol]).play()
      setTimeout(() => canPlayInput = true, 500)
    }

    const clickProcess = (id) => {
        if (!answer || id == '') {return}
        setGuess(id)
        setPrev(answer)
        setShowFeedback(true)
    }

    const handleGuess = (symbol, weight, correct = true, guess = '') => {
      const tot = history[symbol].total + 1
      const num_correct = history[symbol].correct + correct
      const confusedWith = history[symbol].confusedWith
      if (!correct) { confusedWith.add(guess)}
      history[symbol] = {correct : num_correct, total: tot, weight: weight, confusedWith : confusedWith}
      setShowFeedback(false)
      setHistory(history)
    }

    const hasReqs = () => {
      for (const [key, value] of Object.entries(history)){
        if (value.correct / value.total < .8) return true
      }
      return false
    }

    const answer = getSymbol()
  return (
    <div className='container'>
      <TopBar />
      <div className='display-body'>
        {hasReqs() ? <WorkOnBox history={history}/> : null}
        {showFeedback ? <Feedback setShowFeedback={setShowFeedback} prev={prev} guess={guess}
        handleGuess={handleGuess} playSound={playSoundInput}/> :
        <div className='ipa-table'>
          <h1 className='page-title'>International Consonants</h1>
          <Table toggle={toggle} setAll={selectAll} 
          handleClick = {clickProcess} headings={headings} headers={headers} rows={rows}
          inSelected={inSelected} setHovering={setHovering} isHovering={isHovering} colSpan={2}/>
          <img draggable={false} className = 'play-button international' src={answer ? PlayButton : GrayedButton} 
          alt="Play Button" onClick={playSound} />
        </div>
        }
      </div>
    </div>
  );
}
export default IntCons