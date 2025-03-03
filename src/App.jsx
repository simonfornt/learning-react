import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Navlist'
import Book from './Book'
import List from './List'

function App() {
  

  return (
    <>
      <Navbar/>
    <main>
     
      <Book title="Mastering React" author="Anthony pham"/>
      <Book title="Mastering Javascript" author="Simon Piar"/>
      <List/>
      
    </main>
      
        
      
      
    </>
  )
}

export default App;
