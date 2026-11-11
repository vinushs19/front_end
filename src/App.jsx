import { useState } from 'react'

import './App.css'
import Try from './comp/Compon.jsx'
import Popup from './comp/Popup.jsx'
import Calc from './comp/Calcs.jsx'
function App() {
  const [count, setCount] = useState(0)
let arg=["Nanba Unuku ooru aadhirchi","Now I know basics of frontend also😁.,",
  "Nanba Unuku ooru aadhirchi","Now I know basics of frontend also😁.,",
  "Love you 💕😍😘😘😍💕","sneha","1","2","1"]
let i=0;
let ii=1; 
const [nanba,setnanba]=useState(arg[0]);
const [nanba2,setnanba2]=useState(arg[1]);
const [sn,setsn]=useState(arg[4]);
const [ha,setha]=useState(arg[5]);
const [one,setone]=useState(nanba);
const [two,settwo]=useState(nanba2);

return (
  <>
  <h1>{one}</h1><h2>{two} </h2>
    <Try
     v1="one"
     v2="one_button"
     />
    <Try
     v1="two"
     v2="two_button"
     />
    <Try
     v1="three"
     v2="three_button"
     />
    <Try
     v1="four"
     v2="four_button"
     />
    <Try
     v1="five"
     v2="five_button"
     />
    <Try
     v1="six"
     v2="six_button"
     />

     <div className='s'>
     
      <a className='s_a' href='#'>
     <h3 className='s_h3'>7</h3>
     <button className='s_btn' onClick={()=>{
      if(one ==arg[0]&&two==arg[1]){
        setone(sn);
        settwo(ha);
        console.log("dai")
        console.log(arg[i],arg[ii])
      }
      else if(one ==arg[4]&& two==arg[5]){
        setone(nanba);
        settwo(nanba2);
        console.log(arg[i],arg[ii])
        console.log("thambi")
      
      }
     }}>7th_button</button>
     </a>
     </div>
  
  
  </>
  )
}

export default App
