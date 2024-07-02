import React, { useState } from 'react';
import ToDoLists from './ToDoLists';

function App() {

  const [inputList, setInputList] = useState();
  const [item, setItem] = useState([]);

  const itemEvent = (event) => {
    // console.log(event.target.value);
    setInputList(event.target.value)
  };

  const listOfItems = () => {
    setItem((oldItem) => {
      return [...oldItem, inputList]
    })
    setInputList("")
  }

  const deleteItems = (id) => {
    console.log('deleted');

    setItem((oldItem)=>{
      return oldItem.filter((arrElem, index)=>{
        return index !== id;
      })
    })
}
  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br />
          <h1>ToDo List </h1>
          <br />

          <input type='text' placeholder='Add items'
            value={inputList}
            onChange={itemEvent} />

          <button onClick={listOfItems}> + </button>

          <ol>
            {
              item.map((itemVal, index) => {
                return <ToDoLists
                  key={index}
                  id={index}
                  text={itemVal}
                  onSelect={deleteItems}
                />
              })
            }
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
