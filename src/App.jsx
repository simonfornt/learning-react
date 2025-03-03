import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Navlist'
import Book from './Book'
import List from './List'
import TodoList from './component/TodoList'


  const App = () => {
    const todos = [
      { id: 1, title: 'Learn React', completed: true },
      { id: 2, title: 'Build an app', completed: false },
      { id: 3, title: 'Deploy the app', completed: false },
    ];
  
    return (
      <main>
        <h1>Todo List</h1>
        <TodoList todos={todos} />
      </main>
    );
  };
  
  export default App;
