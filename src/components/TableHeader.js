const TableHeader = ({ corner, headings, setAll, toggle, inSelected, setHovering, isHovering}) => {

  const allSelected = () => {
      return Array.from(Array(headings.length).keys()).every((elem) => inSelected(false, elem * 2))
  }
  return (
    <tr>
      <th key={0} className={`header ${allSelected() ? 'selected' : ''} ${isHovering(false, -1) ? 'highlighted' : ''}`} 
      onClick={() => setAll()}
      onMouseOver={()=> setHovering({row: -2, col: -1})} onMouseOut={() => setHovering({row: -2, col: -2})}>
        {corner}
      </th>
      {headings.map((head, index) => (
        <th
          key={index + 1}
          colSpan={2}
          className= {`header ${inSelected(false, index * 2) ? 'selected' : ''}
        ${isHovering(false, index) ? 'highlighted' : ''}`}
          onMouseOver={() => setHovering({row: -2, col: index})}
          onMouseOut={() => setHovering({row: -2, col: -2})}
          onClick={() => toggle(false, index)}
        >
          {head}
        </th>
      ))}
    </tr>
  );
};
export default TableHeader;
