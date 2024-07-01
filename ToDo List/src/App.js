import React, { useState } from 'react';

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
  }
  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br />
          <h1>ToDo List </h1>
          <br />

          <input type='text' placeholder='Add items' onChange={itemEvent} />
          <button onClick={listOfItems}> + </button>

          <ol>
            {
              item.map((itemVal) => {
                return <il> {itemVal} </il>
              })
            }
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
