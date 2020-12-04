import './App.css';
import { useState, useRef, useEffect } from 'react';
import Table from './Table.js';
import { getData } from '../utilities/api';

function App() {
  // const [data, setData] = useState([]);
  const [paginationConfig, setPaginationConfig] = useState({});
  const [dataPortion, setDataPortion] = useState([]);
  const buttonRefLarge = useRef();
  const buttonRefSmall = useRef();


  useEffect(() => {
    async function handleClick(e) {
      const res = await getData(e.target.id === 'largeSetButton' ? true : false);
      // setData([...res]);
      setPaginationConfig({
        increment: Number(50),
        currentStart: Number(0),
        remainder: Number(res.length),
      });
      console.log('paginationConfig', paginationConfig);
      const currentEnd = paginationConfig.currentStart + paginationConfig.increment;
      setDataPortion(res.slice(paginationConfig.currentStart, currentEnd));
      const nextStart = paginationConfig.currentStart += paginationConfig.increment;
      const nextRemainder = paginationConfig.remainder -= paginationConfig.increment;
      setPaginationConfig({
        increment: 50,
        currentStart: nextStart,
        remainder: nextRemainder,
      });
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
