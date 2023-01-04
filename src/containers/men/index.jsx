import React, { useEffect, useState } from "react"
import { getCategories } from "../../API"
import { useQuery } from 'react-query'

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
    <>
    {categoryMen.length>0 && ( <div className="w-full h-50px p-3">
        <img
          src={categoryMen[0].image}
          alt={`${categoryMen[0].title} image`}
          className="w-full scale-100 hover:scale-105 ease-in duration-200 hover:cursor-pointer"
        />
      </div>)}

      <div className="flex flex-row flex-wrap">
     {categoryMen.length>0 && categoryMen[0]?.subCategories.map((category)=>
     (<div className="w-1/2 h-450px p-3  border-2 border-white hover:cursor-pointer" key={category.id}>
          <img
            src={category.image}
            alt={`${category.title} image`}
            className="w-full scale-100 hover:scale-105 ease-in duration-200"
          />
        </div>)
        ) }
      </div>
    </>
  );
};

export default Men;
