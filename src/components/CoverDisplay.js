import React from 'react';
import '../css/coverdisplay.css';
import '../media/coverdisplay_media.css'

const CoverDisplay = () => {
    return(
        <div className=" flex flex-column w-75 items-center justify-center ">
           <div className=" style1 tc h-auto pa0">
               <p>some small text</p>
           </div>
           <div className=" flex flex-column f1 fw5 style2 tc black">
               <div>FINAL</div>
               <div>PURCHASING</div>
           </div>
           <div className=" style3 tc black f4"> 
           <p>Spend 20% off! "Dont miss!!"</p>
           </div>
           <div className=" btn_alignmt  tc"> 
           <div className="pointer bg-animate shadow-hover  hover-bg-black  wdth ba pa2"><div className="hover-white f5" >WOMEN' SHOP</div></div>
           <div className="pointer bg-animate shadow-hover hover-bg-black style4  wdth ba pa2"><div className="hover-white f5">MEN'S SHOP</div></div>
           </div>
        </div>
    )
}

export default CoverDisplay;