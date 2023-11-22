import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [employees, setEmployees] = useState([]);

  const displayInfos = () => {
    console.log(name + age + address + country);
  }

  const addEmployee = () => {
    Axios.post('http://localhost:3001/create', { name, age, country, address }).then(() => {
      console.log("success");
      // Refresh the employee list after adding a new employee
      showEmployees();
    });
  }

  const showEmployees = async () => {
    try {
      const response = await Axios.get('http://localhost:3001/showEmployees');
      const emplo = response.data.employees; // Assuming the employees array is nested under the "employees" key
      setEmployees(emplo);
    } catch (error) {
      console.error("Error", error);
    }
  };
  

  // Load employees when the component mounts
  useEffect(() => {
    showEmployees();
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div className="App">
      <div className='Infos'>
        <label>Name : </label>
        <input type="text" onChange={(event) => setName(event.target.value)} />
        <label>Age : </label>
        <input type="number" onChange={(event) => setAge(event.target.value)} />
        <label>Address : </label>
        <input type="text" onChange={(event) => setAddress(event.target.value)} />
        <label>Country : </label>
        <input type="text" onChange={(event) => setCountry(event.target.value)} />
        <br />
        <input type="button" onClick={addEmployee} value="Add Employee" />
        <input type="button" onClick={displayInfos} value="Display Infos" />
      </div>
    
      <h1>---------------------------------------------------------------------------------------------------</h1>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Country</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.name}</td>
              <td>{employee.age}</td>
              <td>{employee.country}</td>
              <td>{employee.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
