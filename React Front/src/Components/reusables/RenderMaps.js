import React, {useState, useEffect} from 'react';
import './Cards.css'
import skin from '../../Assets/skintest.webp'
import anvil from '../../Assets/anvil.webp'
import tnt from '../../Assets/TNT.webp'


const RenderTextures = () => {

  const  [data, setData] = useState([]);
  
  useEffect(()=>{
  
    const getData = async () =>{
        try {
        
          const response = await fetch("http://127.0.0.1:7777/api/maps/getAll");
          const data = await response.json();
  
          const arreglo = Object.values(data);
  
          console.log(typeof arreglo);
          setData(arreglo[0]);
          console.log(arreglo);
  
  
        } catch (error) { 
         console.log('We have a problem for obtain the users'); 
        }
    };
  
    getData();
  
  
  }, []);
  
return(



       
    <div>
      
       <h1>Maps</h1>
         {data.map(item => (
       
            <div className='card2'  key={item._id}>
             <div className='up'>
 
               <div className='infoHolder'>
                 <div className='infoRow'>
                   <p className='infoTitle'>Code</p>
                   <p>{item.code}</p>
                 </div>
                 <div className='infoRow'>
                   <p className='infoTitle'>Name</p>
                   <p>{item.name}</p>
                 </div>
                 <div className='infoRow'>
                   <p className='infoTitle'>Version</p>
                   <p>{item.version[0].version}</p>
                 </div>
                 <div className='infoRow'>
                   <p className='infoTitle'>Category</p>
                   <p>{item.category}</p>
                 </div>
                 <div className='infoRow'>
                   <p className='infoTitle'>Downloads</p>
                   <p>{item.downloads}</p>
                 </div>
               
               
               </div>
             </div>
 
             <div className='downCard'>
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

