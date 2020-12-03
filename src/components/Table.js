import './Table.css';
import React from 'react';
import TableRow from './TableRow.js';

function Table(props) {
  const data = props.data;
  // console.log('data Table', data);
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>firstName</th>
          <th>lastName</th>
          <th>email</th>
          <th>phone</th>
        </tr>
      </thead>
      <tbody>
        {
          data
            ? data.map((item) => (
              <TableRow key={item.id} data={item} />
            ))
            : (
              <tr>
                <td colSpan="5">
                  Данных нет
                </td>
              </tr>
            )
        }
      </tbody>
    </table>
  );
}

export default Table;
