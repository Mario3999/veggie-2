import React from 'react'
import styles from './Textbox.module.scss'

const Textbox = ({search, updateSearch, getSearch}) => {
  
  let searchButton = document.getElementById('search-button')

  return (
    <div className={styles['textbox-container']}>
        <input type="text" className={styles['input']} value={search} onChange={updateSearch} placeholder='Inserire ricetta...' />
        <button id='search-button' className={styles['search-button']} 
        onMouseDown={()=>{searchButton.style.top='2px'; searchButton.style.borderStyle = 'inset'}} onClick={getSearch} onMouseUp={()=>{searchButton.style.top='0px'; searchButton.style.borderStyle = 'outset'}} onMouseLeave={()=>{searchButton.style.top='0px'; searchButton.style.borderStyle = 'outset'}}>Search</button>
    </div>
  )
}

export default Textbox