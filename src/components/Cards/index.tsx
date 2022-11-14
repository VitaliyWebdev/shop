import React, { FC } from 'react';
import './styles.scss';
import search from '../../assets/search.png';

const Cards: FC = () => {
  return (
    <div className="cards_wrapper">
      <h1>All items</h1>
      <div className="search_wrapper">
        <img src={search} alt="search" />
        <input type="text" placeholder="Search" maxLength={30} />
      </div>
    </div>
  );
};

export default Cards;
