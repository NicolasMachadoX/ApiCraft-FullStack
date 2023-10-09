import React, {useState, useEffect} from 'react';
import './Cards.css'
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
  
          console.log( arreglo);
          setData(arreglo[0]);

  
        } catch (error) { 
         console.log('We have a problem for obtain the users'); 
        }
    };
  
    getMods();
  
  
  }, []);
  
return(

 

       
  <div>
  <h1>Mods</h1>
    {data.map(item => (
  
       <div className='card2'  key={item._id}>
        <div className='up'>
      {console.log('Valor de item.version:', )}
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
            <div className='infoRow'>
              <p className='infoTitle'>Description</p>
              <p>{item.description}</p>
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

export default RenderMods;