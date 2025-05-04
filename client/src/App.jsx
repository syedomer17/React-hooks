import React from 'react';
import UseState from './components/UseState';
import UseEffect from './components/UseEffect';
import CounterComponent from './components/CostumHooks.jsx/CounterComponent';
import DataFetchingComponent from './components/DataFetchingComponent';
import UseLocalStorage from './components/UseLocalStorage';
import UserProvider from './components/usecontext/UserProvider';
import UserGreeating from './components/usecontext/UserGreeating';
import UserRole from './components/usecontext/UserRole';


const App = () => {
  return (
    <>
    <UseState />
    <UseEffect />
    <CounterComponent />
    <DataFetchingComponent />
    <UseLocalStorage />
    <UserProvider>
      <UserGreeating />
      <UserRole />
    </UserProvider>
    </>
  );
};

export default App;
