import React from 'react'
import axios from 'axios';
import styles from './RecipeDetails.module.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const RecipeDetails = () => {

  const unstrippedPathname = useLocation().pathname

  const pathname = unstrippedPathname.substring(1, unstrippedPathname.length)

  const [titles, setTitles] = useState();

  useEffect(()=>{fetchApi();},[]);
  
  const fetchApi = async () => {
    try{
      const id = pathname
      const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=7fad6a4779ae494389675988d67a0280`)
      // console.log(response)
      setTitles(response)
    }
    catch(error){
      alert(error)
    }
  }
  if(!titles){
    return <div>Loading</div>
  }
  return (
    <div className={styles['container']}>
       <h1>{titles.data.title}</h1>
       <img src={titles.data.image} alt="Immagine" />
       <div className={styles['summary']}>{titles.data.summary}</div>
    </div>
  )
}

export default RecipeDetails