const TableHeader = ({ corner, headings, setAll, toggle, inSelected, setHoverCol, hoverCol}) => {
  const allSelected = () => {
      return Array.from(Array(headings.length).keys()).every((elem) => inSelected(false, elem * 2))
  }
  return (
    <tr>
      <th key={0} className={`header ${allSelected() ? 'selected' : ''} ${hoverCol == -1 ? 'highlighted' : ''}`} 
      onClick={() => setAll()}
      onMouseOver={()=> setHoverCol(-1)} onMouseOut={() => setHoverCol(-2)}>
        {corner}
      </th>
      {headings.map((head, index) => (
        <th
          key={index + 1}
          colSpan={2}
          className= {`header ${inSelected(false, index * 2) ? 'selected' : ''}
        ${hoverCol == index ? 'highlighted' : ''}`}
          onMouseOver={() => setHoverCol(index)}
          onMouseOut={() => setHoverCol(-2)}
          onClick={() => toggle(false, index)}
        >
          {head}
        </th>
      ))}
    </tr>
  );
};
export default TableHeader;
