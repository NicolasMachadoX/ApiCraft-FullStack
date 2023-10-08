import React, {useState, useEffect} from 'react';
import './Cards.css'
import skin from '../../Assets/skintest.webp'
import anvil from '../../Assets/anvil.webp'
import tnt from '../../Assets/TNT.webp'


const RenderTextures = () => {

  const  [data, setData] = useState([]);
  
  useEffect(()=>{
  
    const getUsers = async () =>{
        try {
        
          const response = await fetch("http://127.0.0.1:7777/api/textures/getAll");
          const data = await response.json();
  
          const arreglo = Object.values(data);
  
          console.log(typeof arreglo);
          setData(arreglo[0]);
          console.log(arreglo);
  
  
        } catch (error) { 
         console.log('We have a problem for obtain the users'); 
        }
    };
  
    getUsers();
  
  
  }, []);
  
return(



       
    <div>
       <h1>Textures</h1>
         {data.map(item => (
       
            <div className='card2'  key={item._id}>
             <div className='up'>
 
               <div className='infoHolder'>
                 <div className='infoRow'>
                   <p className='infoTitle'>Email</p>
                   <p>{item.nombre}</p>
                 </div>
                 <div className='infoRow'>
                   <p className='infoTitle'>Password</p>
                   <p>{item.password}</p>
                 </div>
                 <div className='infoRow'>
                   <p className='infoTitle'>Status</p>
                   <p>{item.status}</p>
                 </div>
                 <div className='infoRow'>
                   <p className='infoTitle'>Account</p>
                   <p>{item.account}</p>
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



)
}

export default RenderTextures;