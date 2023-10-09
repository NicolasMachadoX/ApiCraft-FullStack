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
        
          const response = await fetch("http://127.0.0.1:7777/api/servers/getAll");
          const data = await response.json();
  
          const arreglo = Object.values(data);
  
          console.log(typeof arreglo);
          setData(arreglo[0]);
   
  
  
        } catch (error) { 
         console.log('We have a problem for obtain the data'); 
        }
    };
  
    getData();
  
  
  }, []);
  
return(



       
    <div>
       <h1>Servers</h1>
         {data.map(item => (
       
            <div className='card2'  key={item._id}>
             <div className='up'>
 {console.log(data[0])}
               <div className='infoHolder'>
               <div className='infoRow'>
                   <p className='infoTitle'>Ip</p>
                   <p>{item.ip}</p>
                 </div>
                 <div className='infoRow'>
                   <p className='infoTitle'>Name</p>
                   <p>{item.name}</p>
                 </div>                 
                 <div className='infoRow'>
                   <p className='infoTitle'>Capacity</p>
                   <p>{item.capacity}</p>
                 </div>
                 <div className='infoRow'>
                   <p className='infoTitle'>Access</p>
                   <p>{item.access}</p>
                 </div>
                 <div className='infoRow'>
                   <p className='infoTitle'>Bedwars</p>
                   <p>{item.bedWars ? 'yes' : 'no'}</p>
                 </div>
                 <div className='infoRow'>
                   <p className='infoTitle'>Skywars</p>
                   <p>{item.skyWars ? 'yes' : 'no'}</p>
                 </div>
                 <div className='infoRow'>
                   <p className='infoTitle'>Survival</p>
                   <p>{item.survival ? 'yes' : 'no'}</p>
                 </div>
                 <div className='infoRow'>
                   <p className='infoTitle'>PVP</p>
                   <p>{item.pvp ? 'yes' : 'no'}</p>
                 </div>
                 <div className='infoRow'>
                   <p className='infoTitle'>HungerGames</p>
                   <p>{item.hungerGames ? 'yes' : 'no'}</p>
                 </div>
                 <div className='infoRow'>
                   <p className='infoTitle'>Status</p>
                   <p>{item.status ? 'yes' : 'no'}</p>
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

