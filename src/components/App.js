import './App.css';
import React from 'react';
import Table from './Table.js';
import { getData } from '../utilities/api';

function App() {
  const [data, setData] = React.useState();
  const [paginationConfig, setPaginationConfig] = React.useState();
  const [dataPortion, setDataPortion] = React.useState();
  const buttonRefLarge = React.useRef();
  const buttonRefSmall = React.useRef();


  React.useEffect(() => {
    async function handleClick(e) {
      const res = await getData(e.target.id === 'largeSetButton' ? true : false);
      console.log('res', res);
      setData(res);
      console.log('data', data);
      setPaginationConfig({
        increment: 50,
        currentStart: 0,
        remainder: data.length,
      });
      console.log('paginationConfig', paginationConfig);
      // const currentEnd = paginationConfig.currentStart + paginationConfig.increment;
      // setDataPortion(data.slice(paginationConfig.currentStart, currentEnd));
      // const nextStart = paginationConfig.currentStart += paginationConfig.increment;
      // const nextRemainder = paginationConfig.remainder -= paginationConfig.increment;
      // setPaginationConfig({
      //   increment: 50,
      //   currentStart: nextStart,
      //   remainder: nextRemainder,
      // });
    }
    buttonRefLarge.current.addEventListener('click', handleClick);
    buttonRefSmall.current.addEventListener('click', handleClick);
  }, []);

  return (
    <div className="App">
      <button type='button' ref={buttonRefLarge} id='largeSetButton' >Получить большой набор данных</button>
      <button type='button' ref={buttonRefSmall} id='smallSetButton' >Получить малый набор данных</button>
      <Table data={dataPortion} ></Table>
    </div>
  );
}

export default App;
