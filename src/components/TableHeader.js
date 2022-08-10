const TableHeader = ({ corner, headings, setAll, toggle, inSelected}) => {
  const allSelected = () => {
      return Array.from(Array(headings.length).keys()).every((elem) => inSelected(false, elem * 2))
  }
  return (
    <tr>
      <th key={0} className={`header ${allSelected() ? 'selected' : ''}`} onClick={() => setAll()}>
        {corner}
      </th>
      {headings.map((head, index) => (
        <th
          key={index + 1}
          colSpan={2}
          className= {`header ${inSelected(false, index * 2) ? 'selected' : ''}`}
          onClick={() => toggle(false, index)}
        >
          {head}
        </th>
      ))}
    </tr>
  );
};
export default TableHeader;
