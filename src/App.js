import React from 'react';
import Todo from './Todo';

function App() {
  return (
    <div>
      <h1>Todos</h1>
      <h2>My Little List</h2>
    <Todo text='Learn React'/>
    <button>Click Me</button>
    <h2>This little app is using a modal pop-upp</h2>
    <h2>In a separate module taht is called from here</h2>
    </div>
  );
}

export default App;
