import React, { FC } from 'react';
import './App.scss';
import Cards from './components/Cards';
import Header from './components/Header';

const App: FC = () => {
  return (
    <div className="main_wrapper">
      <Header />
      <Cards />
    </div>
  );
};

export default App;
