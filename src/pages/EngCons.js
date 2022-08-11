import {useState} from 'react'
import Table from "../components/Table";
import WorkOnBox from '../components/WorkOnBox';
import Feedback from "../components/Feedback"
import TopBar from '../components/TopBar';
import PlayButton from '../images/play_button.png'
import GrayedButton from '../images/grayed_button.png'
import {sound} from '../commons/Sounds'

const EngCons = () => {
    const headings = ['Bilabial', 'Labio-Dental', 'Dental', 'Alveolar', 'Post-Alveolar', 'Palatal', 'Velar', 'Glottal']
    const headers = ['Stops', 'Nasal', 'Flap', 'Fricative', 'Affricate', 'Approximant', 'Lateral Approximant']
    const rows = [
      ['p', 'b', '', '', '', '', 't', 'd', '', '', '', '', 'k', 'g', 'ʔ', ''],
      ['', 'm', '', '' ,'', '', '', 'n', '', '', '' ,'', '', 'ŋ', '', ''],
      ['', '', '', '', '', '', '', 'ɾ', '', '', '', '', '', '', '', ''],
      ['', '', 'f', 'v', 'θ', 'ð', 's', 'z', 'ʃ', 'ʒ', '', '', '', '', 'h', ''],
      ['', '', '', '', '', '', '', '', 'tʃ', 'dʒ', '', '', '', '', '', ''],
      ['', 'w', '', '', '', '', '', 'ɹ', '', '', '', 'j', '', 'w', '', ''],
      ['', '', '', '', '', '', '', 'l', '', '', '', '', '', '', '', '']
    ]
    const cols = rows[0].map((_, colIndex) => rows.map(row => row[colIndex]));
    
    const initHistory = () => {
      let ans = {}
      rows.forEach(row => row.forEach(elem => elem != '' ? ans[elem] = {correct: 0, total: 0, weight: 3} : null))
      return ans
    }

    const [prev, setPrev] = useState(null)
    const [guess, setGuess] = useState(false)
    const [showFeedback, setShowFeedback] = useState(false)
    const [selected, setSelected] = useState({rows: [], cols: []})
    const [hovering, setHovering] = useState({row: -2, col: -2})
    const [hoverRow, setHoverRow] = useState(-2)
    const [hoverCol, setHoverCol] = useState(-2)
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
      if (isRow){
        return selected.rows.includes(index)
      }
      else{
        return selected.cols.includes(index)
      }
    }

    const getSymbol = () => {
      if (!selected.rows && !selected.cols){return}
      // Uses all selected rows and cols, makes a set out of them. Then,
      // Gets the respective weights. Then, makes an array. Finally, gets a random element from that array
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
    const answer = getSymbol()

    // Play the selected sound
    let canPlay = true
    const playSound = () => {
      if (!canPlay) {return}
      canPlay = false
      new Audio(sound[selected]).play()
      setTimeout(() => canPlay = true, 1500)
    }

    const clickProcess = (id) => {
        setGuess(id)
        setPrev(selected)
        setShowFeedback(true)
    }

    const handleGuess = (symbol, weight, correct = true) => {
      const tot = history[symbol].total + 1
      const num_correct = history[symbol].correct + correct
      history[symbol] = {correct : num_correct, total: tot, weight: weight}
      setShowFeedback(false)
      setHistory(history)
    }

    const isHovering = (isRow, index) => {
      if (isRow){
        return hovering.row == index
      }
      else{
        return hovering.col == index
      }
    }

  return (
    <div className='container'>
      <TopBar />
      {showFeedback ? <Feedback setShowFeedback={setShowFeedback} prev={prev} guess={guess}
      handleGuess={handleGuess} /> :
      <div className='display-body'>
        <WorkOnBox history={history}/>
        <div className='ipa-table'>
          <h1 className='page-title'>English Consonants</h1>
          <Table toggle={toggle} setAll={selectAll} 
          handleClick = {clickProcess} headings={headings} headers={headers} rows={rows}
          inSelected={inSelected} setHovering={setHovering} isHovering={isHovering} />
          <img draggable={false} className = 'play-button' src={selected ? PlayButton : GrayedButton} 
          alt="Play Button" onClick={playSound} />
        </div>
      </div>
      }
    </div>
  );
};

export default EngCons;
