import React, { FC, useState } from 'react';
import './styles.scss';
import shoes from '../../assets/shoes.png';
import heart from '../../assets/heart.png';
import check from '../../assets/check.png';
import { IItem } from '../../constants/items';
interface ICardProps {
  item: IItem;
}
const Card: FC<ICardProps> = ({ item }) => {
  const { category, name, price } = item;
  const [isChosen, setIsChosen] = useState<boolean>(false);

  return (
    <div className="card_wrapper">
      <div className="card_top_wrapper">
        <button className="heart_wrapper">
          <img src={heart} alt="heart" />
        </button>
        <img src={shoes} alt="shoes" width={133} height={112} />
      </div>
      <div className="card_center_wrapper mt-14">
        <p>{category} </p>
        <p>{name}</p>
      </div>
      <div className="card_bottom_wrapper mt-14">
        <div>
          <p className="price_title">Price:</p>
          <p className="price_value">{price} грн</p>
        </div>
        <button
          onClick={() => setIsChosen((prev) => !prev)}
          className={isChosen ? 'item_chosen' : ''}
        >
          {isChosen ? <img src={check} alt="check" width={10} height={8} /> : '+'}
        </button>
      </div>
    </div>
  );
};

export default Card;
