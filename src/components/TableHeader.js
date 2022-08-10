const TableHeader = ({ corner, headings, setAll, toggle}) => {
  return (
    <tr>
      <th key={0} className="header" onClick={() => setAll()}>
        {corner}
      </th>
      {headings.map((head, index) => (
        <th
          key={index + 1}
          colSpan={2}
          className="header"
          onClick={() => toggle(false, index)}
        >
          {head}
        </th>
      ))}
    </tr>
  );
};
export default TableHeader;
