const TableRow = ({ header, columns, handleClick, toggle, ind }) => {
  return (
    <tr>
      <th key={ind} className="header" onClick={() => toggle(true, ind)}>
        {header}
      </th>
      {columns.map((col, index) => (
        <td key={index + 1} className={`symbol ${col != "" ? "filled" : ""}`} onClick = {() => handleClick(col)}>
          {col}
        </td>
      ))}
    </tr>
  );
};

export default TableRow;
