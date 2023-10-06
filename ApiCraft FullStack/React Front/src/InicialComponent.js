import React, {useState, useEffect} from 'react';


import './App.css'

const RenderUsers = () => {

  const  [users, setUser] = useState([]);
  
  useEffect(()=>{
  
    const getUsers = async () =>{
        try {
        
          const response = await fetch("http://127.0.0.1:7777/api/users/getAll");
          const data = await response.json();
  
          const arreglo = Object.values(data);
  
          console.log(typeof arreglo);
          setUser(arreglo[0]);
          console.log(users);
  
  
        } catch (error) { 
         console.log('We have a problem for obtain the users'); 
        }
    };
  
    getUsers();
  
  
  }, []);
  
  return (
  
    <div>
        <h1>Users</h1>
        <table>
          <thead>
            <tr>
                <th>Skin</th>
                <th>Name</th>
                <th>Nickname</th>
                <th>Email</th>
                <th>Password</th>
                <th>Status</th>
                <th>Account</th>
            </tr>
          </thead>
          <tbody>
             {users.map(user=>(
              <tr key={user._id}>
                <td>{user.skin    }</td>
                <td>{user.name     }</td>
                <td>{user.nickname }</td>
                <td>{user.email    }</td>
                <td>{user.password }</td>
                <td>{user.status   }</td>
                <td>{user.account  }</td>
                <td>
                   <button variant="contained" color="primary">Update</button>
                </td>
                <td>
                  <button variant="contained" color="warning">Delete</button>
                  </td>
              </tr>   
            ))}
          </tbody>
        </table>
    </div>
    );
  };
  
  export default RenderUsers;