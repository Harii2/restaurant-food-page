import React from 'react'
import {useLoaderData} from "react-router-dom"
import { useState,useEffect } from 'react'
import {BiChevronLeft, BiChevronRight} from "react-icons/bi"
import FoodItemsPage from './FoodItemsPage'


const Types = [
    {
        id:1,
        url:"https://washops.s3.ap-south-1.amazonaws.com/category-13013-small-200.jpg",
        title:"Food",
        option:"FOOD"
    },
    {
        id:2,
        url:"https://washops.s3.ap-south-1.amazonaws.com/category-13015-small-200.jpg",
        title:"Beverages",
        option:"BEVERAGES"
    },
    {
        id:3,
        url:"https://washops.s3.ap-south-1.amazonaws.com/category-13135-small-200.jpg",
        title:"Desserts",
        option:"DESSERTS"
    },
    {
        id:4,
        url:"https://washops.s3.ap-south-1.amazonaws.com/category-13014-small-200.jpg",
        title:"Drinks",
        option:"DRINKS"
    },
    {
        id:5,
        url:"https://washops.s3.ap-south-1.amazonaws.com/category-13016-small-200.jpg",
        title:"Latest Updates",
        option:"Latest Updates"
    }
]

const FoodPage = () => {
    const data = useLoaderData()

    const [currentType,setType] = useState("FOOD");
    const [categoryArray,setCategoryArray] = useState([])
    const [indxArray,setIndx] = useState([])
    const [Hyd,setHyd] = useState(false)
    const [Goa,setGoa] = useState(false)
    const [both,setBoth] = useState(true)
    const [location,setLocation] = useState("ALL")


    useEffect(()=>{
      const filteredItems = data.filter(each => {
        if(each.type === currentType && each.location === location){
            return each
        }
        return ""
      })
      
      let indicesArray = []
      const groupedArray = filteredItems.reduce((accumulator, obj) => {
        const key = obj.category;
        if (!accumulator[key]) {
            indicesArray.push(key)
            let url = "https://images.unsplash.com/photo-1578861256505-d3be7cb037d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c291cHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
  
          accumulator[key] = {id:key,items:[],url};
        }
        accumulator[key].items.push(obj);
        return (accumulator);
      }, []);

      setIndx(indicesArray)
      setCategoryArray(groupedArray)
    },[data,currentType,location])

    const nextSlide = (e) => {
        let i = 0 ;
        while(Types[i].option !== currentType){
            i += 1 ;
        }
        const nextIndx = (i === 4 ? 0 : i+1) ;
        const item = Types[nextIndx];
        setType(item.option)

    }
    
    const prevSlide = (e) => {
        let i=0;
        while(Types[i].option !== currentType){
            i += 1 ;
        }
        const itemIndx = (i===0 ? 4 : i-1) ;
        const item = Types[itemIndx];
        setType(item.option)
    }
   
  return (
    <div >
        <div className='flex justify-center items-center relative'>
            <div className='top-2 cursor-pointer' onClick={prevSlide}>
                <BiChevronLeft color='gray'  size={50}/>
            </div>
            <div className='w-[500px] flex justify-center items-center mt-6'>
                {
                    Types.map(each => (
                        <div key={each.id} onClick={() => setType(each.option)} className={`w-20 cursor-pointer ${each.option === "Latest Updates" && 'mt-4'}`}>
                            <img className={`w-16 ${each.option === currentType ? "border-black border-[2px] brightness-95" : "border-white border-[2px] brightness-50"}  rounded-md`} src = {each.url} alt="img"/>
                            <span className='text-center text-md'>{each.title}</span>
                        </div>
                    ))
                }
            </div>
            
            <div className='top-2 cursor-pointer' onClick={nextSlide}>
                <BiChevronRight color='gray' size={50}/>
            </div>

        </div>
                
             <h1 className='text-gray-500'>Choose Location</h1>
            <div className='flex justify-center items-center mt-8 mb-8'>
            <div className='w-[500px] flex justify-between'>
                
                    <div onClick={() => {setHyd(!Hyd);setGoa(false);setLocation("HYDERABAD");setBoth(false)}}>
                        <input type='radio'  checked={Hyd}  />
                        <label>Hyderabad</label>
                    </div>
                    <div onClick={() => {setGoa(!Goa);setHyd(false);setLocation("GOA");setBoth(false)}}>
                        <input type='radio'  checked={Goa}  />
                        <label>Goa</label>
                    </div>
                    <div onClick={() => {setBoth(!both);
                    if(!both){
                        setGoa(true);
                        setHyd(true);
                        setLocation("ALL")
                    }
                    else{
                        setGoa(false);
                        setHyd(true);
                        setLocation("HYDERABAd")
                    }
                    }}>
                        <input type='radio' checked = {both}/>
                        <label>Both</label>
                    </div>
                </div>

            </div>
        
        {
            indxArray.map(each => <FoodItemsPage key = {categoryArray[each].id} title ={ each} items = {categoryArray[each].items} url={categoryArray[each].url}/>)
        
        }
    </div>
  )
}

export default FoodPage;
