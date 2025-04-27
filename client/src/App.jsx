import React from 'react';
import UseState from './components/UseState';
import UseEffect from './components/UseEffect';
import CounterComponent from './components/CostumHooks.jsx/CounterComponent';
import DataFetchingComponent from './components/DataFetchingComponent';
import UseLocalStorage from './components/UseLocalStorage';


const App = () => {
  return (
    <>
    <UseState />
    <UseEffect />
    <CounterComponent />
    <DataFetchingComponent />
    <UseLocalStorage />
    </>
  );
};

export default App;
