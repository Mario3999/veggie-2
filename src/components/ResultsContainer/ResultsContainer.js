import React from 'react'
import styles from './ResultsContainer.module.scss'
import Card from '../Card/Card';
import {Link} from 'react-router-dom';

const ResultsContainer = ({titles}) => {
  return (
    <div className={styles['ResultsContainer']}>
      {titles.map((title)=>(
        <Link to={`/${title.id}`}>
          <Card key={title.id} title={title.title} image={title.image} />
        </Link>
      ))}
    </div>
  )
}

export default ResultsContainer