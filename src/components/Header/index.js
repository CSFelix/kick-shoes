import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

import logo from '../../assets/images/logo.svg';
import { Container, Cart } from './styles';

export default function Header() {
  return (
    <Container>
      <Link to='/'>
        <img src={logo} alt='KickShoes' />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>My Cart</strong>
          <span>3 items</span>
        </div>

        <MdShoppingBasket size={36} color='#FFF' />
      </Cart>
    </Container>
  );
}
