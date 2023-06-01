import succes from "../assets/succes.png"
import React, { useState,useRef ,useEffect } from 'react';
import { RxDragHandleHorizontal } from 'react-icons/rx';
import {AiOutlineSearch} from "react-icons/ai"

const Navbar = () => {
  const [showPanel, setShowPanel] = useState(false);
  const panelRef = useRef(null);

  const togglePanel = () => {
    setShowPanel(!showPanel);
    console.log(showPanel)
  };

  const handleOutsideClick = (event) => {
    if (panelRef.current && !panelRef.current.contains(event.target)) {
      setShowPanel(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const body = document.querySelector('body');
  body.style.filter = showPanel ? 'grayscale(100%)' : 'none';

  return (
    <nav className="bg-white border-[1px]">
      <div className="flex items-center justify-start px-4 py-2">
      <div>
          <button
            onClick={togglePanel}
            className="text-xl mr-4 focus:outline-none"
          >
            <RxDragHandleHorizontal size={30} />
          </button>
        </div>

        <div>
          <span className="text-xl font-bold">
          <p className='font-bold p-0 m-0'>Yazu Goa</p>
             <div className='flex flex-row justify-center m-0 p-0'>
               <img className='w-4 h-4 mt-1 mr-1' src={succes} alt='true'/>
                 <p className='text-sm'>Official Site</p>
            </div>
          </span>
        </div>

        <div className="ml-auto">
            <AiOutlineSearch size={30}/>
        </div>
        
      </div>
      {showPanel && (
        <div ref={panelRef} className="bg-white text-black z-10 w-64 h-screen p-4 fixed top-0 left-0 transform -translate-x--100 transition-transform duration-300 ease-in-out">
            <div className="flex justify-start flex-col items-start">
                <h1 className="text-xl font-bold">Yazu Goa</h1>
                <hr color="black"/>
                <p className="m-1 font-bold">Home</p>
                <p className="m-1 font-bold">Digital Menu</p>
                <ul className="flex flex-col items-start ml-2 cursor-pointer">
                    <li className="m-1">Food</li>
                    <li className="m-1">Beverages</li>
                    <li className="m-1">Desserts</li>
                    <li className="m-1">Drinks</li>
                    <li className="m-1">Latest Updates</li>
                </ul>
            </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
