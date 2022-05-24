import React from 'react'
import { useEffect, useState } from 'react';
import Header from './Header';
import ResultsContainer from './ResultsContainer';
import sideimage from '../assets/img/veg-icon.png'
import axios from 'axios';


const Home = () => {

    const [titles, setTitles] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('pasta');
    
    const updateSearch = e=>{
        setSearch(e.target.value)
    }
    
    const getSearch = e =>{
        setQuery(search)
    }
    
    useEffect(()=>{fetchApi();},[query]);
    
    
    const fetchApi = async () => {
        try{
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&maxFat=25&number=9&diet=vegetarian&apiKey=7fad6a4779ae494389675988d67a0280`)
        console.log(response.data.results)
        setTitles(response.data.results)
        }
        catch(error){
        // alert(error)
        }
    }
  return (
        <div className='App'>
            <Header search={search} updateSearch={updateSearch} getSearch={getSearch} />
            <ResultsContainer titles={titles} />
            <img className='first-side-image' src={sideimage} alt="" />
            <img className='second-side-image' src={sideimage} alt="" />
            
        </div>
    )
}

export default Home