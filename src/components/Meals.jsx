import React from 'react';
import { useGlobalContext } from '../context.jsx';
import {FaRegThumbsUp} from 'react-icons/fa';
const Meals = () => {
    const {meals} = useGlobalContext();
  return (
    <section className='section-center'>
        {
            meals.map((singleMeal) => {
                const {idMeal, strMeal: title, strMealThumb: image} = singleMeal;
                return <article key={idMeal} className='single-meal'>
                    <img src={image} className='img' />
                    <footer>
                        <h5>{title}</h5>
                        <button className='like-btn'><FaRegThumbsUp/></button>
                    </footer>
                </article>
            })
        }
    </section>
  )
}

export default Meals
