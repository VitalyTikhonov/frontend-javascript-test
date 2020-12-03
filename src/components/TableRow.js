import './TableRow.css';

function TableRow(props) {
  const { data } = props;
  return (
    <tr>
      <td>{data.id}</td>
      <td>{data.firstName}</td>
      <td>{data.lastName}</td>
      <td>{data.email}</td>
      <td>{data.phone}</td>
    </tr>
  );
}

export default TableRow;
