import './App.css';
import { useState } from 'react';

function App(){


  const [age, setAge]= useState(0)
  const [hrl,set]= useState(0)
  

  
  function calculate(){
    const uHrl=(220-age)* 0.85;
    const lHrl=(220-age)* 0.65;
    setHrl(lHrl + "-" + uHrl)
  }
  
  return(
    <form div id='content'>
      <div>
      <h3>Heart Rate Limits</h3>
      </div>
      <div>
      <label>Age</label> &nbsp;
      <input type="number" value={age} onChange={a=> setAge(a.target.value)}></input>
      </div>
      <br></br>
      <div>
      <label>Heart Rate Limits</label> &nbsp;
      <button>{hrl}</button>
      </div>
      <br></br>
      <div>
      <button type="button" class="btn btn-primary"onClick={calculate}>Calculate</button>
      </div>
    </form>
  );
}

export default App;