import { useState } from 'react'
import { useContext } from 'react'
import { datacontext } from './context/DataContext'

const App = () => {
  // const [count, setCount] = useState(0)
  const [data,setdata]= useContext(datacontext)
  console.log(data)


  return(
    <div>
      App
    </div>
  )
}

export default App
