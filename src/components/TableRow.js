const TableRow = ({ header, columns, handleClick, toggle, ind, inSelected, setHoverRow, hoverRow}) => {
  return (
    <tr>
      <th key={ind} className={`header ${inSelected(true, ind) || inSelected(true, ind) ? 'selected' : ''}
      ${ind == hoverRow ? 'highlighted' : ''}`} 
      onMouseOver={()=>setHoverRow(ind)}
      onMouseOut={() => setHoverRow(-2)}
      onClick={() => toggle(true, ind)}>
        {header}
      </th>
      {columns.map((col, index) => (
        <td key={index + 1} 
        className={`symbol ${col != "" ? "filled" : ""} 
        ${inSelected(true, ind) || inSelected(false, index) ? 'selected' : ''}
        ${index % 2 == 0 ? 'even-box' : 'odd-box'}`} 
        onClick = {() => handleClick(col)}>
          {col}
        </td>
      ))}
    </tr>
  );
};

export default TableRow;
