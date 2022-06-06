import React from 'react';
import Textbox from '../Textbox/Textbox';
import styles from './Header.module.scss';

const Header = ({search, updateSearch, getSearch}) => {
  return (
    <header>
      <img className={styles['carrot-image']} src={process.env.PUBLIC_URL + '/carrot-image.svg'} alt="carrot-image" />
      <h1>Veggie</h1>
      <img className={styles['carrot-image-flipped']} src={process.env.PUBLIC_URL + '/carrot-image.svg'} alt="carrot-image" />
      <Textbox search={search} updateSearch={updateSearch} getSearch={getSearch} />
    </header>
  )
}

export default Header