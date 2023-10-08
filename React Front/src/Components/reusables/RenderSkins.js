import React, {useState, useEffect} from 'react';
import './Cards.css'
import skin from '../../Assets/skintest.webp'
import anvil from '../../Assets/anvil.webp'
import tnt from '../../Assets/TNT.webp'


const RenderUsers = () => {

  const  [skins, setSkins] = useState([]);
  
  useEffect(()=>{
  
    const getUsers = async () =>{
        try {
        
          const response = await fetch("http://127.0.0.1:7777/api/skins/getAll");
          const data = await response.json();
  
          const arreglo = Object.values(data);
  
          console.log(typeof arreglo);
          setSkins(arreglo[0]);
          console.log(data);
  
  
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
       <h1>Skins</h1>
         {skins.map(skin => (
           <div className='itemUser' key={skin._id}>
 
             <div className='up'>
               <div className='skinHolder'>
                 <img src={skin.image} alt={skin.name} className='userImage' />
                 <div className='userDetails'>
                   <span className='name'>{skin.name}</span>
                 </div>
               </div>
 
               <div className='infoHolder'>
                 <div className='infoRow'>
                   <p className='infoTitle'>Category</p>
                   <p>{skin.category}</p>
                 </div>
                 <div className='infoRow'>
                   <p className='infoTitle'>Downloads</p>
                   <p>{skin.downloads}</p>
                 </div>
                 <div className='infoRow'>
                   <p className='infoTitle'>Description</p>
                   <p>{skin.description}</p>
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