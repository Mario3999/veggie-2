import React from 'react'
import Textbox from './Textbox'
import carrot from '../assets/img/carrot-image.svg'
import styles from './Header.module.css'

const Header = ({search, updateSearch, getSearch}) => {
  return (
    <header>
      <img className={styles['carrot-image']} src={carrot} alt="" />
      <h1>Veggie</h1>
      <img className={styles['carrot-image-flipped']} src={carrot} alt="" />
      <Textbox search={search} updateSearch={updateSearch} getSearch={getSearch} />
    </header>
  )
}

export default Header