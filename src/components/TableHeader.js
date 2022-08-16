const TableHeader = ({ corner, headings, headers, setAll, toggle, inSelected, colSpan}) => {

  const allSelected = () => {
      return (Array.from(Array(headings.length).keys()).every((elem) => inSelected(false, elem * colSpan)) && 
      Array.from(Array(headers.length).keys()).every((elem) => inSelected(true, elem)))
  }
  return (
    <tr>
      <th key={0} className={`header ${allSelected() ? 'selected' : ''}`} 
      onClick={() => setAll()}>
        {corner}
      </th>
      {headings.map((head, index) => (
        <th
          key={index + 1}
          colSpan={colSpan}
          className= {`header ${inSelected(false, index * colSpan) ? 'selected' : ''}`}
          onClick={() => toggle(false, index)}
        >
          {head}
        </th>
      ))}
    </tr>
  );
};
export default TableHeader;
