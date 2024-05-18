import './App.css';

function App() {
  return (
    <>
    <form className='new-item-form'>
      
      <label htmlFor="item">New Item</label> 
      <input type="text" id='item'/>
      <button className='btn'>Add</button>
    </form>
    <h1>Todo List</h1>
    </>

  );
}

export default App;
