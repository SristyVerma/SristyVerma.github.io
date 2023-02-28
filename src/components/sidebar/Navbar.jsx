import React, { useReducer } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { sideBarMenu, socialIcons } from '../../data/data'

import { BsXLg, BsListNested } from 'react-icons/bs'
import { reducer } from '../../hooks/useReducer'
import './sidebar.scss'

const defaultOptions = {
  showAside1: false,
  openCloseNav1: false,
}

const Navbar = React.memo(() => {
  // dispatch reducer functionality
  const [state, dispatch] = useReducer(reducer, defaultOptions)
  
  return (
    <>
      <BsListNested id="nav-menu"
        onClick={() => dispatch({ type: 'OPEN_NAVBAR' })}
        className="menu-icon switch__color"
      />
      <aside
        className={`${state.openCloseNav1 ? 'aside open-sidebar' : 'aside'} ${
          state.showAside1 ? 'aside show-asideBar' : 'aside'
        }`}
      >
        <div className="aside-wrapper">
          <BsXLg
            onClick={() => dispatch({ type: 'CLOSE_NAVBAR' })}
            className="close-btn switch__color"
          />
          <Link
            className="logo-section"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent:"center",
              
              lineHeight: '2',
            }}
            to="/"
          >
            
            <span className="switch__color font-effect-emboss" style={{ fontSize: '3.2rem' ,fontFamily:'Sofia, sans-serif'}}>
             Sristy
            </span>
          </Link>
          <ul className="side-link">
            {sideBarMenu.map((link, index) => {
              const { text, icon, url } = link
              return (
                <li key={index}>
                  <NavLink
                    onClick={() => dispatch({ type: 'CLOSE_NAVBAR' })}
                    className={({ isActive }) => {
                      return isActive ? 'nav__links active-links' : 'nav__links'
                    }}
                    to={url}
                  >
                    {icon}
                    {text}
                  </NavLink>
                </li>
                
              )
            })}
          </ul>
          
          <div className="social-icon">
            {socialIcons.map((icons, index) => {
              const { icon, url ,id} = icons
              return (
                <a href={url} key={index} id={id}>
                  {icon}
                </a>
              )
            })}
          </div>
        </div>
      </aside>
    </>
  )
})

export default Navbar
