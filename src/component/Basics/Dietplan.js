import React, { useState } from 'react'
import "./style.css";
import Diet from "./dietApi";
import DietCard from './DietCard';
import Navbar from './Navbar';

const uniqueList =[...new Set(Diet.map((curElem)=>{
   return curElem.category;
  })
  ),
  "All",
];
console.log(uniqueList)




const Dietplan = () => {

       const[dietData,setdietData]=useState(Diet);
       const[dietList,setdietList]=useState(uniqueList);
       const filterItem=(category)=>{

        if(category === "All"){
          setdietData(Diet);
          return;
        }
        const updateList = Diet.filter((curElem)=>{
          return curElem.category === category;
        });
        setdietData(updateList);
       };


  return (
    <>
     <Navbar filterItem={filterItem} dietList={dietList}/>
    <DietCard dietData={dietData}/>
    </>
  );
}

export default Dietplan