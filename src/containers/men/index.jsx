import React, { useEffect, useState } from "react"
import { getCategories } from "../../API"
import { useQuery } from 'react-query'
import './index.css';

const Men = () => {
  const { isLoading, error, data:categories }  = useQuery('categories', getCategories)
  const [categoryMen,setCategoryMen] = useState([])

  useEffect(() => {
    if(categories) setCategoryMen(categories.filter(c=>c.title==="MEN"))
  }, [categories]);
  
  if(isLoading){
    return <h2 className="flex justify-center items-center m-5 p-5">lOADING...</h2>
  }

  if(error){
    return <h2 className="flex justify-center items-center m-5 p-5">SERVER ERROR</h2>
  }

  return (
    <div className="w-full">
    {categoryMen.length>0 && ( <div className="w-full image_container border-10 border-white hover:cursor-pointer">
        <img
          src={categoryMen[0].image}
          alt={`${categoryMen[0].title} image`}
        />
      </div>)}

      <div className="flex flex-row flex-wrap justify-start">
     {categoryMen.length>0 && categoryMen[0]?.subCategories.map((category)=>
     (<div className="w-1/2 border-10 border-white hover:cursor-pointer image_container" key={category.id}>
          <img
            src={category.image}
            alt={`${category.title} image`}
          />
        </div>)
        ) }
      </div>
    </div>
  );
};

export default Men;
