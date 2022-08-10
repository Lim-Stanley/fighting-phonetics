const TableRow = ({ header, columns, handleClick, toggle, ind, inSelected }) => {
  return (
    <tr>
      <th key={ind} className={`header ${inSelected(true, ind) || inSelected(true, ind) ? 'selected' : ''}`} 
      onClick={() => toggle(true, ind)}>
        {header}
      </th>
      {columns.map((col, index) => (
        <td key={index + 1} 
        className={`symbol ${col != "" ? "filled" : ""} ${inSelected(true, ind) || inSelected(false, index) ? 'selected' : ''}`} 
        onClick = {() => handleClick(col)}>
          {col}
        </td>
      ))}
    </tr>
  );
};

export default TableRow;
