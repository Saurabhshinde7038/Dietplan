import React from 'react'

const Navbar = ({filterItem,dietList}) => {
  return (
    <>
  <nav className="navbar">
       <div className='btn-group'>
       {dietList.map((curElem,id)=>{
         return(  
             <button key={id}
              className='btn-group__item' 
              onClick={()=>filterItem(curElem)}>
              {curElem}
              </button>
        );
        })}
      
       </div>
    </nav>
    </>
  )
}

export default Navbar;