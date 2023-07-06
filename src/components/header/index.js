import React from 'react';
// Icones comecam com Fa
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import { Nav } from './styles';

export default function Header() {
  return (
    <Nav>
      {/* Similar ao <a href> */}
      <Link to="/">
        {/*  24px */}
        <FaHome size={24} />
      </Link>
      <Link to="/register">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/login">
        <FaSignInAlt size={24} />
      </Link>
    </Nav>
  );
}
