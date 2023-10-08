import React, {useState, useEffect} from 'react';
import './Cards.css'
import skin from '../../Assets/skintest.webp'
import anvil from '../../Assets/anvil.webp'
import tnt from '../../Assets/TNT.webp'


const RenderMods = () => {

  const  [data, setData] = useState([]);
  
  useEffect(()=>{
  
    const getMods = async () =>{
        try {
        
          const response = await fetch("http://127.0.0.1:7777/api/mods/getAll");
          const data = await response.json();
  
          const arreglo = Object.values(data);
  
          console.log(typeof arreglo);
          setData(arreglo[0]);

  
        } catch (error) { 
         console.log('We have a problem for obtain the users'); 
        }
    };
  
    getMods();
  
  
  }, []);
  
return(

<div className='card'>

<div className='containerUser'>
       
       <div className='cardUser'>
       <h1>Mods</h1>
         {data.map(mod => (
           <div className='itemUser' key={mod._id}>
 
             <div className='up'>
               <div className='skinHolder'>
                 <img src={skin} alt={mod.name} className='userImage' />
                 <div className='userDetails'>
                   <span className='name'>{mod.name}</span>
                 </div>
               </div>
 
               <div className='infoHolder'>
                 <div className='infoRow'>
                   <p className='infoTitle'>Code</p>
                   <p>{mod.code}</p>
                 </div>
                 <div className='infoRow'>
                   <p className='infoTitle'>Version</p>
                   <p>{mod.version.version}</p>
                 </div>
                 <div className='infoRow'>
                   <p className='infoTitle'>Category</p>
                   <p>{mod.category}</p>
                 </div>
                 <div className='infoRow'>
                   <p className='infoTitle'>Downloads</p>
                   <p>{mod.downloads}</p>
                 </div>
                 <div className='infoRow'>
                   <p className='infoTitle'>Description</p>
                   <p>{mod.description}</p>
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

export default RenderMods;