import { useState } from 'react';
import { AddCategory, GifGrid } from './components/index';



export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch' ]);

    const onAddCategory = (newCategory) => {
        if( categories.includes(newCategory) ) return;
        setCategories([newCategory,...categories]);
    }

  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>
        {/* Input */}
        <AddCategory

            onNewCategory={ (e) => onAddCategory(e)}
        //  setCategories={ setCategories }
         
         />
        {/* Listado de Gif */}
        
        <ol>
            { 
               categories.map( ( category ) => (
               <GifGrid 
                  key={category}
                  category={category}/>
               ))
            }   
            {/* <li>ABC</li> */}
        </ol>

        {/* Gif Item */}


    </>
  )
}
