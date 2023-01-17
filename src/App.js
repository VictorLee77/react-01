import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setDoTos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setDoTos((currentArray) => [toDo, ...currentArray]);
    console.log(toDos);
    setToDo("");
  }
  return (
    <Router>
    <div>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange}
          value={toDo}
          type="text" 
          placeholder="Write your to do..">
          </input>
        <button>Add to do</button>
      </form>
    </div>
    </Router>
  );
}

export default App;
