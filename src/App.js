import { useState } from 'react';
import './app.css'
import 'font-awesome/css/font-awesome.min.css';

function App() {
  const [inputdata, setInputData] = useState("")
  const [item, setItem] = useState([])

  const ItemEvent1 = (e) => {
    setInputData(e.target.value)
  }

  const ItemEvent = () => {
    setItem((olditem) => {
      return [...olditem, inputdata]
    })
    setInputData("");
    // Clear the input field after adding an item
  }
  const dele =(index) =>{
    const updated=[...item]
    updated.splice(index,1)
    setItem(updated)

  }
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>toDo list</h1>
          <br />
          <input type="text" placeholder="Enter an Item" value={inputdata} onChange={ItemEvent1} />
          <button onClick={ItemEvent}>+</button>
          <ol>
            {item.map((itemval, index) => (
              <div className="todo_style">
                <i className="fa fa-times"  aria-hidden="true" onClick={()=>{dele(index)}}/>
                  <li key={index}>{itemval}</li>
              </div>
              
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
