import React, { useState } from 'react';
import {FiChevronDown, FiChevronUp} from "react-icons/fi"
import { useNavigate } from 'react-router-dom';

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}


const images = ["https://washops.s3.ap-south-1.amazonaws.com/category-13013-small-200.jpg",
                "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/06/vegetable-soup-500x375.jpg",
                "https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&w=600",
                "https://cdn.pixabay.com/photo/2017/06/22/20/14/salmon-2432339_1280.jpg",
                "https://media.istockphoto.com/id/1477693667/photo/delicious-pizzas.webp?b=1&s=170667a&w=0&k=20&c=CzxPbUpWLd-gtl_HkKZ_okA_w2PigVs2tpNhui5LtgE=",
                "https://media.istockphoto.com/id/1357320931/photo/slice-of-key-lime-pie-with-whipped-cream-and-lime-zest-on-a-plate.webp?b=1&s=170667a&w=0&k=20&c=TYceBgsbgIiO8Y7UII_QhfuaepV5GCcwTGPGqvKCLUE=",
                "https://media.istockphoto.com/id/638522480/photo/glass-bottle.webp?b=1&s=170667a&w=0&k=20&c=lT_LG2zQX89bzsSsDP5__lnp-gWMhqZn32MTvDeWv18=",
                "https://media.istockphoto.com/id/1303977605/photo/five-cocktails-in-hands-joined-in-celebratory-toast.webp?b=1&s=170667a&w=0&k=20&c=zXJunKE_RJAZWndDcnTxQ4t5sZGsPBaKL6ZhflyWVm0=",
                "https://media.istockphoto.com/id/1368666610/photo/drinks-lemonade-cola-drink-softdrinks-in-cans-with-ice-cubes-portrait-format.webp?b=1&s=170667a&w=0&k=20&c=v-z9dsWYBXXLUsr_aCmXDLEh63xTVb3ifZ3PiLksF4I="

]	

const veg_no_veg = ["https://yazugoa.wcom.site/images/filter1_veg.png","https://yazugoa.wcom.site/images/filter1_nonveg.png"]

async function getImageUrl(keyword) {
  const response = await fetch(`https://api.unsplash.com/photos/random?query=${keyword}&client_id=SsHvjVCXl_yngnfNaWZYADRqig59Cg7mnoTzpXd-lF4`);
  const data = await response.json();
  const imageUrl = data.urls.regular;
  return imageUrl;
}


const ListItems = (props) => {
    const {each,items} = props
    const navigator = useNavigate()


    const rootString = (id) => {
      return String(id).toLowerCase().split(" ").join("")
    }
    const  handleClicked = () => {
      
        let url = "";
        getImageUrl(each.name)
        .then(imageUrl => url = imageUrl)
        .catch(e => console.log(e)) 

        navigator(`/p/${rootString(each.name)}`,{
          state:{
            item : each ,
            related : items,
            url : url
          }
        })
    }
    return(
        <div>
              <div key={each.name} onClick={handleClicked}  className='bg-#FFF0F5 m-2 cursor-pointer'>
                        <div className='flex justify-between'>
                              <div className='w-9/12'>
                                   <div className='flex items-center gap-2'>
                                      <img className='w-5 h-5' src={
                                        each.veg_non_veg === "VEG" ? veg_no_veg[0] : veg_no_veg[1]
                                      } alt="veg/noveg" />
                                      <h1 className='font-semibold'>{capitalize(each.name)}</h1>
                                   </div>
                                  <p className='text-gray-500 text-md '>{each.description}</p>
                              </div>

                              <p>&#8377;{each.price !== "" ? each.price : each.price_for_drinks}</p>
                        </div>
                </div>
        </div>
    )
}

const FoodItemsPage = (props) => {
    

    const [toggleOn,setToggle] = useState(false)

    const {title,items} = props
    
    
  return (
      <div className='flex justify-center'>
            <div className='w-[500px] '>
                  <div onClick={() => setToggle(!toggleOn)} className='flex justify-between items-center'>
                        <div className='flex justify-start items-center mb-2'>
                            <img className='w-20 h-20' src={images[Math.floor(Math.random() * images.length)]} alt="img"/>
                            <h1 className='ml-1 font-semibold'>{capitalize(title)}</h1>
                        </div>
                      {
                        toggleOn ? <FiChevronUp/> : <FiChevronDown/>
                      }
                  </div>

                  {
                      toggleOn &&  items.map(each => 
                        <ListItems  each = {each} items = {items}/>
                      )
                  }
            </div>
      </div>
  )
}

export default FoodItemsPage