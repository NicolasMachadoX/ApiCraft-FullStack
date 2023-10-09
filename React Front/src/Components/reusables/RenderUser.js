import React, {useState, useEffect} from 'react';
import './Cards.css'
import skin from '../../Assets/skintest.webp'
import anvil from '../../Assets/anvil.webp'
import tnt from '../../Assets/TNT.webp'


const RenderUsers = () => {

  const  [users, setUser] = useState([]);
  
  useEffect(()=>{
  
    const getUsers = async () =>{
        try {
        
          const response = await fetch("http://127.0.0.1:7777/api/users/getAll");
          const data = await response.json();
  
          const arreglo = Object.values(data);
  
  
          console.log( arreglo[0]);
          setUser(arreglo[0]);

  
        } catch (error) { 
         console.log('We have a problem for obtain the users'); 
        }
    };
  
    getUsers();
  
  
  }, []);
  
return(

<div className='card'>

<div className='containerUser'>
       
       <div className='cardUser'>
       <h1>Users</h1>
         {users.map(user => (
           <div className='itemUser' key={user._id}>
 
             <div className='up'>
               <div className='skinHolder'>
                 <img src={user.skin[0].image} alt={user.name} className='userImage' />
                 <div className='userDetails'>
                   <span className='name'>{user.name}</span>
                   <p>//</p>
                   <span className='nickname'>{user.nickname}</span>
                 </div>
               </div>
 
               <div className='infoHolder'>
                 <div className='infoRow'>
                   <p className='infoTitle'>Email</p>
                   <p>{user.email}</p>
                 </div>
                 <div className='infoRow'>
                   <p className='infoTitle'>Password</p>
                   <p>{user.password}</p>
                 </div>
                 <div className='infoRow'>
                   <p className='infoTitle'>Status</p>
                   <p>{user.status}</p>
                 </div>
                 <div className='infoRow'>
                   <p className='infoTitle'>Account</p>
                   <p>{user.account}</p>
                 </div>
               </div>
             </div>
 
             <div className='down'>
               <div className='buttonContainer'>
                 <div className='spanButton'>
                   <button src='' className='imgItem'><img src={anvil} className='imgCard' alt='' /></button>
                   <div className='hoveredSpan'>
                     <span >Update</span>
                   </div>
                 </div>
                 <div className='spanButton'>
                   <button src='' className='imgItem'><img src={tnt} className='imgCard' alt='' /></button>
                   <div className='hoveredSpan'>
                     <span >Delete</span>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         ))}
       </div>
     </div>
 
</div>  

)
}

export default RenderUsers;