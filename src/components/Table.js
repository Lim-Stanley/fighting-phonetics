import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const Table = ({handleClick, headers, headings, rows, setRows, setCols, setWeights, setAll, toggle}) => {
  return (
    <table className="cons-table">
        <tbody>
        <TableHeader setAll={setAll} setCols={setCols} corner = 'All' headings = {headings} toggle={toggle}/>
        {headers.map((head, index) =>
        <TableRow setRows={setRows} setWeights={setWeights}
        key = {index} ind={index} handleClick = {handleClick} header = {head} columns = {rows[index]} toggle={toggle}/>
        )}
        </tbody>
    </table>
  );
};
export default Table;
