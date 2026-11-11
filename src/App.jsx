import { useState } from 'react'

import './App.css'
import Try from './comp/Compon.jsx'
import Popup from './comp/Popup.jsx'
import Calc from './comp/Calcs.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <h1>Nanba Unuku ooru aadhirchi </h1><h2> Now I know basics of frontend also😁.,</h2>
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
  
  
  </>
  )
}

export default App
