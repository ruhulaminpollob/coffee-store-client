import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLoaderData, useNavigate } from 'react-router-dom'
import CoffeeCard from './component/CoffeeCard'

function App() {

  const loadedCoffees=useLoaderData()
  const [coffees, setCoffees]=useState(loadedCoffees)
  const navigate=useNavigate()
  return (
    <>
      <div className='p-10'>
        <h1>coffee maker </h1>
        <h1>Coffee Count {coffees.length}</h1>
        <button onClick={()=>navigate("/addcoffee")}>goto add coffee page</button>
        <div className='grid grid-cols-2 mt-5 gap-3'>
          {
            coffees.map(coffee=><CoffeeCard
              key={coffee._id}
              coffees={coffees}
              setCoffees={setCoffees}
              coffee={coffee}
              />)
          }
        </div>
      </div>
    </>
  )
}

export default App
