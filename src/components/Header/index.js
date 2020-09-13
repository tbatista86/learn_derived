import React from 'react'

import './styles.css'

export default function Header() {
  return (
    <>
      <ul className="topnav">
        <li>
          <a className="active" href="#home">
            Início
          </a>
        </li>
        <li>
          <a href="#rule">Regra do tombo</a>
        </li>
        <li>
          <a href="#calcule">Na prática</a>
        </li>
        <li className="right">
          <a href="#about">Sobre</a>
        </li>
      </ul>
    </>
  )
}
