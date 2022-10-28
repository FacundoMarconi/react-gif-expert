import React from 'react'
import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'
import './style.css'


export const GifExpertApp = () => {


    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;
        // categories.push('Valorant')  
        setCategories([ newCategory, ...categories,])
    }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            // setCategories ={setCategories}
            onNewCategory = {onAddCategory} 
        />
        
        {

            categories.map( (category) => (
                <GifGrid key= {category} category= {category}/>
              ))

                // categories.map(category => {
                //     return <li key={category}>{category}</li>
                // })
        }
        
    </> 
 )
}
