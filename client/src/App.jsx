import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios';

import './index.css';
import RegisterForm from './RegisterForm';
function App() {
const [message,setMessage] = useState('')
useEffect(()=>{
//Fetch ApI
axios.get("http://localhost:8000/")
.then(response => {
setMessage(response.data)
})
.catch(error=>{
setMessage(error.message)
})
},[])
return (
<>
<h1 className='text-blue-500 text-3xl text-b'>Welcome to Zaire courier service</h1>
<RegisterForm/>
</>
)
}
export default App