import React, { useEffect, useState } from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import { TwitterShareButton, WhatsappShareButton } from 'react-share';
import {FaTwitter,FaFacebookF} from "react-icons/fa"
import {BsWhatsapp} from "react-icons/bs"


//image ? image : "https://images.unsplash.com/photo-1661529515642-fef696c86f64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTU5NjB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODU2MjEyNzR8&ixlib=rb-4.0.3&q=80&w=1080"
// Fetches an image URL based on a keyword using the Unsplash API
// async function getImageUrl(keyword) {
//     const response = await fetch(`https://api.unsplash.com/photos/random?query=${keyword}&client_id=SsHvjVCXl_yngnfNaWZYADRqig59Cg7mnoTzpXd-lF4`);
//     const data = await response.json();
//     const imageUrl = data.urls.regular;
//     return imageUrl;
//   }

const ShareButtons = ({ shareUrl, title }) => {
    return (
      <div className='flex gap-2 mt-8 mb-8'>

        <div className='w-[80px] h-[25px]  bg-gray-200 flex justify-center items-center rounded-sm'>
            <WhatsappShareButton className='flex ' url={shareUrl} title={title}>
                <FaFacebookF size={20} color='#1DA1F2'/> <p className='m-1 text-xs font-semibold text-blue-500'>Share</p>
            </WhatsappShareButton>
        </div>

        <div className='w-[80px] h-[25px]  bg-gray-200 flex justify-center items-center rounded-sm'>
            <TwitterShareButton className='flex ' url={shareUrl} title={title}>
            <FaTwitter size={20} color='#1DA1F2'/> <p className='m-1 text-xs font-semibold text-blue-500'>TWEET</p>
            </TwitterShareButton>
        </div>

        <div className='w-[80px] h-[25px]  bg-gray-200 flex justify-center items-center rounded-sm'>
            <WhatsappShareButton className='flex ' url={shareUrl} title={title}>
                <BsWhatsapp size={20} color='#25D366'/> <p className='m-1 text-xs font-semibold text-green-500'>SEND</p>
            </WhatsappShareButton>
        </div>


       
        
      </div>
    );
  }


const imagesArray = [
    "https://media.istockphoto.com/id/1401753479/photo/salad-with-mozzarella-tomatoes-and-basil-healthy-eating-vegetarian-food.webp?s=170667a&w=0&k=20&c=UWszQ3QqFyVKZy35gUkiJhnrjOXn0rmTItTyBszIhQ0=",
    "https://images.unsplash.com/photo-1667716757139-aa1d88d0b795?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hlc2UlMjB0b2FzdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1591120583691-49d2741e55da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BpY3klMjBlZ3BsYW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    "https://media.istockphoto.com/id/1208826087/photo/fresh-aubergines-egplant-roasted-in-oven-with-garlic.webp?b=1&s=170667a&w=0&k=20&c=VzzN5IEy7BIDLfVbkFZa6mJN_2B4ivXTkrMrPEv-aEY=",
    "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVzc2VydHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
]

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

const rootString = (id) => {
    return String(id).toLowerCase().split(" ").join("")
  }

const RelatedItem = (props) => {
    const {item,related} = props
    const navigator = useNavigate();

    const handleClicked = () => {
        
        navigator(`/p/${rootString(item.name)}`,{
            state:{
                item:item,
                related:related,
                url:""
            }
        })
    }
    return(
        <div onClick={handleClicked} className='cursor-pointer'>
            <img className=' w-[200px] h-[100px]' src = {imagesArray[Math.floor(Math.random() * imagesArray.length)]} alt = "img" />
            <p>{capitalize(item.name)}</p>
        </div>
    )
}
  
const Product = () => {

    const location = useLocation()
    const [item,setItem] = useState("")
    const [image,setImage] = useState("")
    const [related,setRelated] = useState([])

    useEffect(() => {
        setItem(location.state.item);
        setImage(location.state.url)
        setRelated(location.state.related)
    },[location.state])
    
    
    return (
        <div className='flex justify-center  items-center'>
            <div className='w-10/12'>
                <div className='flex  mt-5'>
                    <div>
                        <img className='w-[400px] h-[300px] rounded-md' src = {image ? image : "https://images.unsplash.com/photo-1661529515642-fef696c86f64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTU5NjB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODU2MjEyNzR8&ixlib=rb-4.0.3&q=80&w=1080" } alt='img'/>
                    </div>
                    <div className='ml-5'>
                        <h1 className='font-semibold text-lg mb-4'>{item.name}</h1>
                        <p className='text-ms mb-4'>{item.description}</p>
                        <p className='text-gray-400 font-semibold text-ms mb-4'>{`Home / Yazu Goa / ${item.type} / ${item.category}`}</p>
                        
                        <span className='font-bold mb-4'> {item.price && <p>&#8377; {item.price}</p>} </span>
                        {
                            item.price_for_drinks === "" && item.type === "DRINKS" && <p>30 ml is <span className='font-bold mb-4'>{item.price_for_drinks}</span></p>
                        }
                        {
                            item.type === "DRINKS" && (item.bottle !== "" && <p>Bootle cost is <span className='font-bold mb-4'>&#8377;{item.bottle}</span></p> )
                        }
                    </div>
                </div>

                <div className=''>
                    <ShareButtons title = {item.name} shareUrl={`http:localhost:3000/p/${rootString(item.name)}`}/>

                    <p>Related</p>
                    <div className='overflow-x-scroll '>
                        <div className='flex gap-8 w-9/12'>
                            {
                                related.map(each => <RelatedItem key = {each.name} item = {each} related={related}/>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Product