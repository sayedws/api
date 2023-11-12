import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   const getUsers =() => {
  //     fetch ('https://jsonplaceholder.typicode.com/users')
  //     .then((res)=> res.json())
  //     .then(data=>setUsers(data))
  //     .catch(err=>console.log(err));

  //   };
  //   getUsers();
  //   setLoading(false);
  //   console.log(users);
  // }, [])
  

useEffect(() => {
  const fetchUsers = async()=>{
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(res);
      setUsers(res.data)
    } catch (error) {
      console.log(error);
    }
  };
  fetchUsers();
  setLoading(false);



}, []);



  return (
    <div className="App">{ loading ? <h1>loading...</h1> : (
    users.map(el=>(
      <div>
    
      <h3>{el.name}</h3>
      <h4>{el.adress}</h4>
      <h5>{el.email}</h5>
      </div>
      ))
    )}
    </div>
  );
}

export default App;
