import React, { FC } from 'react';
import './styles.scss';
import search from '../../assets/search.png';
import Card from '../Card';
import { items } from '../../constants/items';

const Cards: FC = () => {
  return (
    <div className="cards_wrapper">
      <div className="top_wrapper">
        <h1>All items</h1>
        <div className="search_wrapper">
          <img src={search} alt="search" />
          <input type="text" placeholder="Search" maxLength={30} />
        </div>
      </div>

      <div className="content_wrapper">
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
