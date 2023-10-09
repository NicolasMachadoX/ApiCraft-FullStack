import BP from '../../Assets/buttonMenu.png'
import {Link, Router, Route, Switch} from 'react-router-dom'
 const Menu = () =>{

  return (
   
    <div >
    <Link to="/Home"><button className="menu-item"> 
                <p>Home</p>
      <img src={BP} className="menuButton" />
    </button></Link>
    <Link to="/Contact"><button className="menu-item">
                <p>Contact Us</p>
      <img src={BP} className="menuButton"  />
    
    </button></Link>
    <Link to="/Settings"><button className="menu-item">
                 <p>Settings</p>
      <img src={BP} className="menuButton"  />
    </button></Link>
  </div>


  )
}

export default Menu;