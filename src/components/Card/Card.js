import React from 'react'
import styles from './Card.module.scss'

const Card = ({title, image}) => {
  return (
    <div className={styles['card-container']}>
        <img src={image} alt="" />
        <h3>{title}</h3>  
    </div>
  )
}

export default Card