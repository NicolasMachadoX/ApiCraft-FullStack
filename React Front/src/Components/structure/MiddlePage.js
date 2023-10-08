import RenderUsers from '../reusables/RenderUser';
import RenderSkins from '../reusables/RenderSkins';
import RenderMods from '../reusables/RenderMods';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Card2 from '../reusables/Card2.js';


 const MiddlePage = () =>{

  return (
    <div className='middlePage'>
      

     
  
  
      <div className='linksContent'>

      <Router>
      <Switch>
        <Route exact path="/home" component={Card2} />
        <Route path="/settings" component={Card2} />
        <Route path="/contact" component={Card2} />
        <Route path="/users" component={RenderUsers} />
        <Route path="/servers" component={Card2} />
        <Route path="/shaders" component={Card2} />
        <Route path="/mods" component={RenderMods} />
        <Route path="/maps" component={Card2} />
        <Route path="/skins" component={RenderSkins} />
        <Route path="/textures" component={Card2} />
      </Switch></Router>
      </div>

   
       
    </div>

  )
}

export default MiddlePage;