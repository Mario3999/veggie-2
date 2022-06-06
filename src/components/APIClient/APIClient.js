import React from 'react'
import Home from '../Home/Home'
import { pathname } from '../RecipeDetails/RecipeDetails'

const APIClient = () => {

  const [titles, setTitles] = useState();

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
      <></>
  )
}

export default APIClient