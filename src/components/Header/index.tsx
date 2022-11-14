import React, { FC } from 'react';
import './styles.scss';

import logo from '../../assets/logo.png';
import cart from '../../assets/cart.png';
import heart from '../../assets/heart.png';
import profile from '../../assets/profile.png';

const Header: FC = () => {
  return (
    <header>
      <div className="left_header_content">
        <div>
          <img src={logo} width={40} height={40} alt="logo" />
        </div>
        <div className="left_title_wrapper">
          <h3>REACT SHOP</h3>
          <p>Best shoes shop</p>
        </div>
      </div>
      <div className="right_content">
        <div className="cart_wrapper">
          <img src={cart} alt="cart" width={18} height={18} />
          <span className="price">1000.00 $</span>
        </div>
        <img src={heart} alt="heart" width={20} height={19} className="heartIcon" />
        <img src={profile} alt="profile" width={20} height={20} />
      </div>
    </header>
  );
};

export default Header;
