import React, { useState } from 'react';

function App() {

  const [color, setColor] = useState();

  return (
    <>
      <div style={{ backgroundColor: color, height: '100vh' }}>
        <h1 className="heading">Bg Changer</h1>

        <div className="colorBox" >
          <button onClick={() => setColor("red")} style={{ backgroundColor: 'red' }}>red</button>

          <button onClick={() => setColor("green")} style={{ backgroundColor: 'green' }}>green</button>

          <button onClick={() => setColor("blue")} style={{ backgroundColor: 'blue' }}>blue</button>

          <button onClick={() => setColor("yellow")} style={{ backgroundColor: 'yellow' }}>yellow</button>

          <button onClick={() => setColor("orange")} style={{ backgroundColor: 'orange' }}>orange</button>

          <button onClick={() => setColor("pink")} style={{ backgroundColor: 'pink' }}>pink</button>

          <button onClick={() => setColor("tan")} style={{ backgroundColor: 'tan' }}>tan</button>

        </div>
      </div>
    </>
  )

}

export default App
