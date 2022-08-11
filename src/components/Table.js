import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const Table = ({handleClick, headers, headings, rows, setWeights, setAll, toggle, inSelected, isHovering, setHovering}) => 
{
  return (
    <table className="cons-table">
        <tbody>
        <TableHeader setAll={setAll} corner = 'All' headings = {headings} toggle={toggle} 
        inSelected={inSelected} isHovering={isHovering} setHovering={setHovering}/>
        {headers.map((head, index) =>
        <TableRow setWeights={setWeights}
        key = {index} ind={index} handleClick = {handleClick} header = {head} columns = {rows[index]} 
        toggle={toggle} inSelected={inSelected} isHovering={isHovering} setHovering={setHovering}/>
        )}
        </tbody>
    </table>
  );
};
export default Table;
