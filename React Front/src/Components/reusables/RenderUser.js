import React, {useState, useEffect} from 'react';
import './Cards.css'
import anvil from '../../Assets/anvil.webp'
import tnt from '../../Assets/TNT.webp'
import UpdateModal from '../Crud/Update';
import Search from './Search'

const RenderUsers = () => {

  const  [users, setUser] = useState([]);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState('');

  const [] = useState();

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


  const handelUpdateClick = (id) =>{
    console.log(id);
    setSelectedUser(id)
    setUpdateModalOpen(true)
    console.log(selectedUser);
  }

  const handleUpdate = async (id, newData) =>{
    try {

      alert('el pepe')
      
      setUpdateModalOpen(false)
    } catch (error) {
      
    }
  }

  const delet = async (id) =>{
    try {
          console.log(id);
      const response = await fetch(`http://127.0.0.1:7777/api/users/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
        
      });
    
      if(response.ok){
        console.log('Data eliminated succesfully')
        window.location.reload();
      }else{
        console.log('We have a problem with this request')
      }

    } catch (error) { 
    console.log('We have a problem for obtain the users'); 
    }


  }

  
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
                   <button onClick={()=>handelUpdateClick(user._id)} className='imgItem'><img src={anvil} className='imgCard' alt='' /></button>
                   <div className='hoveredSpan'>
                     <span >Update</span>
                   </div>
                 </div>
                 <div className='spanButton'>
                   <button onClick={()=>delet(user._id)} className='imgItem'><img src={tnt} className='imgCard' alt='' /></button>
                   <div className='hoveredSpan'>
                     <span >Delete</span>
                   </div>
                 </div>
               </div>
             </div>
        {isUpdateModalOpen && (
        <UpdateModal
          user={selectedUser}
          onUpdate={handleUpdate}
          onClose={() => setUpdateModalOpen(false)}
          isOpen={true}
        />
      )}
           </div>
         
         ))}
       </div>
     </div>
 
</div>  

)
}

export default RenderUsers;