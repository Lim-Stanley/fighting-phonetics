import {useState} from 'react'
import Table from "./Table";

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

    const [selRows, setRows] = useState([])
    const [selCols, setCols] = useState([])
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
        if (selCols.includes(index * 2)){
          setCols(selCols.filter(col => col != index * 2 && col != index * 2 + 1))
        }
        else{
          setCols([...selCols, index * 2, index * 2 + 1])
        }
      }
      else{
        if (selRows.includes(index)){
          setRows(selRows.filter(row => row != index))
        }
        else{
          setRows([...selRows, index])
        }
      }
    }

    const clickProcess = (id) => {
        console.log(id)
    }

  return (
    <>
      <h1>This is the English Consonant Page</h1>
      <Table toggle={toggle} setAll={selectAll} setRows={setRows} 
      handleClick = {clickProcess} headings={headings} headers={headers} rows={rows}/>
    </>
  );
};

export default EngCons;
