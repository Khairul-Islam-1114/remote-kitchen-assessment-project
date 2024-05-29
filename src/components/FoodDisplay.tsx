import React from 'react'
import FoodCard from './FoodCard';
import '@/styles/globals.css';

const FoodDisplay = () => {
  return (
    <section className='foodDisplay'>
        <h2 className='foodDisplay__heading'>Explore Our Menu</h2>
        <FoodCard />
    </section>
  )
}

export default FoodDisplay