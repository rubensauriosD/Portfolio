import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md';

const NavStyles = styled.nav`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background: var(--dark-bg);
  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    li {
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease background-color;
      &:hover {
        background-color: var(--deep-dark);
      }
    }
    a {
      display: inline-block;
      font-family: 'RobotoMono Regular';
      padding: 1rem 2rem;
      font-size: 2rem;
      color: var(--gray-1);
    }
    .active {
      color: var(--white);
    }
  }
  .mobile-menu-icon {
    background: var(--dark-bg);
    color: var(--gray-1);
    border: 0;
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    * {
      pointer-events: none;
    }
  }
  .navItems .closeNavIcon {
    background: transparent;
    color: var(--gray-1);
    border: 0;
    display: none;
  }
  .closeNavIcon button { background: transparent; border: 0; color: inherit; cursor: pointer; width: 3rem; }
  @media only screen and (max-width: 768px) {
    padding: 0;
    .hide-item {
      transform: translateY(calc(-100% - var(--top)));
      visibility: hidden;
    }
    .mobile-menu-icon {
      display: block;
    }
    .navItems {
      --top: 1rem;
      transition: 0.3s ease transform;
      background-color: var(--deep-dark);
      padding: 2rem;
      width: 90%;
      max-width: 300px;
      border-radius: 12px;
      position: absolute;
      right: 1rem;
      top: var(--top);
      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        svg {
          pointer-events: none;
        }
      }
      li {
        display: block;
        margin-bottom: 1rem;
      }
    }
  }
`;

export default function NavMenu() {
  const [showNav, setShowNav] = useState(false);
  return (
    <NavStyles>
      <button
        type="button"
        aria-label="Open navigation"
        aria-expanded={showNav}
        aria-controls="main-navigation"
        className="mobile-menu-icon"
        onClick={() => setShowNav(!showNav)}
      >
        <MdMenu />
      </button>

      <ul id="main-navigation" className={!showNav ? 'navItems hide-item' : 'navItems'}>
        <li className="closeNavIcon"><button
          type="button"
          aria-label="Close navigation"
          className="closeNavIcon"
          onClick={() => setShowNav(!showNav)}
        >
          <MdClose />
        </button></li>
        <li>
          <NavLink
            to="/"
            exact
            onClick={() => setShowNav(false)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            onClick={() => setShowNav(false)}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            onClick={() => setShowNav(false)}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            onClick={() => setShowNav(false)}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </NavStyles>
  );
}
