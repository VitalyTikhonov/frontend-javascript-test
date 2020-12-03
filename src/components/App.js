import './App.css';
import React from 'react';
import Table from './Table.js';
import { getData } from '../utilities/api';

function App() {
  const [data, setData] = React.useState();
  // const [isFetched, setIsFetched] = React.useState(false);

  // React.useEffect(() => {
  //   getData();
  // }, []);
  //   if (!isFetched) {
  //     getData();
  //     setIsFetched(true);
  //     }
  // }, [isFetched]);

  async function handleClick(e) {
    console.log('!!!', e.target.id);
    const res = await getData(e.target.id === 'largeSetButton' ? true : false);
    setData(res);
    // console.log('data1', data);
  }
  // console.log('data2', data);

  return (
    <div className="App">
      <button type='button' onClick={handleClick} id='largeSetButton' >Получить большой набор данных</button>
      <button type='button' onClick={handleClick} id='smallSetButton' >Получить малый набор данных</button>
      <Table data={data} ></Table>
    </div>
  );
}

export default App;
