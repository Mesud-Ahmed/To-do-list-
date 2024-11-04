import './App.css'

import  CssBaseline  from '@mui/material/CssBaseline'
import TodoList from './TodoList'
import Navbar from './Navbar'

function App() {

  return (
    <div >
      <CssBaseline />
      <Navbar />
      
      <TodoList />
    </div>
  )
}

export default App