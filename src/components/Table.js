import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const Table = ({handleClick, headers, headings, rows, setRows, setCols, setWeights, setAll, toggle, inSelected,
setHoverRow, setHoverCol, hoverRow, hoverCol}) => 
{
  return (
    <table className="cons-table">
        <tbody>
        <TableHeader setAll={setAll} setCols={setCols} corner = 'All' headings = {headings} toggle={toggle} 
        inSelected={inSelected} setHoverCol={setHoverCol} hoverCol={hoverCol}/>
        {headers.map((head, index) =>
        <TableRow setRows={setRows} setWeights={setWeights}
        key = {index} ind={index} handleClick = {handleClick} header = {head} columns = {rows[index]} 
        toggle={toggle} inSelected={inSelected} setHoverRow={setHoverRow} hoverRow={hoverRow}/>
        )}
        </tbody>
    </table>
  );
};
export default Table;
