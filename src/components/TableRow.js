const TableRow = ({ header, columns, handleClick, toggle, ind, inSelected, colSpan}) => {
  return (
    <tr>
      <th key={ind} className={`header ${inSelected(true, ind) || inSelected(true, ind) ? 'selected' : ''}`}
      onClick={() => toggle(true, ind)}>
        {header}
      </th>
      {columns.map((col, index) => (
        <td key={index + 1} 
        className={`symbol ${col != "" ? "filled" : "not-filled"} 
        ${inSelected(true, ind) || inSelected(false, index) ? 'selected' : ''}
        ${colSpan == 1 ? '' : index % 2 == 0 ? 'even-box' : 'odd-box'} : ''`} 
        onClick = {() => handleClick(col)}>
          {col}
        </td>
      ))}
    </tr>
  );
};

export default TableRow;
