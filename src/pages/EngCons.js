import {useState} from 'react'
import Table from "../components/Table";
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
    const initWeights = () => {
      let ans = {}
      rows.forEach(row => row.forEach(elem => elem != '' ? ans[elem] = 3 : null))
      return ans
    }

    const [prev, setPrev] = useState(null)
    const [guess, setGuess] = useState(false)
    const [showFeedback, setShowFeedback] = useState(false)
    const [selRows, setRows] = useState([])
    const [selCols, setCols] = useState([])
    const [hoverRow, setHoverRow] = useState(-2)
    const [hoverCol, setHoverCol] = useState(-2)
    const [weights, setWeights] = useState(initWeights())

    // Select all
    const selectAll = () => {
      if (selRows.length == rows.length && selCols.length == cols.length){
        setRows([])
        setCols([])
      }
      else{
        setRows(Array.from(Array(rows.length).keys()))
        setCols(Array.from(Array(cols.length).keys()))
      }
    }

    // Toggles a selected row on or off
    const toggle = (isRow, index) => {
      if (!isRow) {
        if (selCols.includes(index * 2)){ setCols(selCols.filter(col => col != index * 2 && col != index * 2 + 1)) }
        else{ setCols([...selCols, index * 2, index * 2 + 1]) }
      }
      else{
        if (selRows.includes(index)){ setRows(selRows.filter(row => row != index))}
        else{ setRows([...selRows, index]) }
      }
    }

    // Return whether a col or row is selected or not
    const inSelected = (isRow, index) => {
      if (isRow){
        return selRows.includes(index)
      }
      else{
        return selCols.includes(index)
      }
    }

    const getSymbol = () => {
      if (!selRows && !selCols){return}
      // Uses all selected rows and cols, makes a set out of them. Then,
      // Gets the respective weights. Then, makes an array. Finally, gets a random element from that array
      const s = new Set()
      selRows.forEach((ind) => rows[ind].forEach(elem => s.add(elem)))
      selCols.forEach((ind) => cols[ind].forEach(elem => s.add(elem)))
      s.delete('')
      if (s.size === 1) {return}
      const vals = []
      s.forEach(elem => Array.from(Array(weights[elem]).keys()).forEach(() => vals.push(elem)))
      let ans = vals[Math.floor(Math.random() * vals.length)]
      while (ans === prev && prev !== null){
        ans = vals[Math.floor(Math.random() * vals.length)]
      }
      return ans
    }
    const selected = getSymbol()
    console.log('selected is ', selected)

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

    const updateWeights = (symbol, weight) => {
      console.log(symbol, weight)
      const newWeights = weights
      weights[symbol] = weight
      setWeights(newWeights)
      setShowFeedback(false)
    }

    console.log(`hover row is ${hoverRow}, hover col is ${hoverCol}`)

  return (
    <div className='container'>
      <TopBar />
      {showFeedback ? <Feedback setShowFeedback={setShowFeedback} prev={prev} guess={guess}
      updateWeights={updateWeights}/> :
      <div className='display-body'>
        <div className='to-work-on'>
        </div>
        <div className='ipa-table'>
          <h1 className='page-title'>English Consonants</h1>
          <Table toggle={toggle} setAll={selectAll} setRows={setRows} 
          handleClick = {clickProcess} headings={headings} headers={headers} rows={rows}
          inSelected={inSelected} setHoverRow={setHoverRow} setHoverCol={setHoverCol}
          hoverRow={hoverRow} hoverCol={hoverCol}/>
          <img draggable={false} className = 'play-button' src={selected ? PlayButton : GrayedButton} 
          alt="Play Button" onClick={playSound} />
        </div>
      </div>
      }
    </div>
  );
};

export default EngCons;
