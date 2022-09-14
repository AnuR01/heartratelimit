import './App.css';
import { useState } from 'react';

function App(){


  const [age, setAge]= useState(0)
  const [heartratelimit,setHeartRateLimit]= useState(0)
  

  
  function calculate(){
    const uHrl=(220-age)* 0.85;
    const lHrl=(220-age)* 0.65;
    setHeartRateLimit(lHrl + "-" + uHrl)
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
      <label>HeartRateLimit</label> &nbsp;
      <button>{heartratelimit}</button>
      </div>
      <br></br>
      <div>
      <button type="button" class="btn btn-primary"onClick={calculate}>Calculate</button>
      </div>
    </form>
  );
}

export default App;