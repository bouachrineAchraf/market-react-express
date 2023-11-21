import './App.css';
import { useState } from 'react';

function App() {
  const [ name,setName] =useState("")
  const [ age,setAge] =useState(0)
  const [ addresse,setAddresse] =useState("")
  const [ country,setCountry] =useState("")
 
  const displayInfos = () => {
    console.log(name + age +  addresse +  country)
  }


  return (
    <div className="App">
      <div className='Infos'>
        <lable>Name : </lable>
        <input type="text" onChange={(event) => setName(event.target.value)}/>
        <lable>Age : </lable>
        <input type="number" onChange={(event) => setAge(event.target.value)}/>
        <lable>Addresse : </lable>
        <input type="text" onChange={(event) => setAddresse(event.target.value)}/>
        <lable>Country : </lable>
        <input type="text" onChange={(event) => setCountry(event.target.value)}/> 
        <br/>
        <input type="button" value="Add Employee" onClick={displayInfos}/>
      </div>
     
    </div>
  );
}

export default App;
