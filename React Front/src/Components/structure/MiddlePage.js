import RenderUsers from '../reusables/RenderUser';
import RenderSkins from '../reusables/RenderSkins';
import RenderMods from '../reusables/RenderMods';
import RenderTextures from '../reusables/RenderTextures';
import RenderShaders from '../reusables/RenderShaders';
import RenderMaps from '../reusables/RenderMaps';
import RenderServers from '../reusables/RenderServers';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import Failed from './Failed';

//CRUD
import Delet from '../Crud/Delet'
import Update from '../Crud/Update'



 const MiddlePage = () =>{

  return (
    <div className='middlePage'>
      

     
  
  
      <div className='linksContent'>

      <Router>
      <Switch>
        <Route exact path="/home" component={Menu} />
        <Route path="/settings"  component={Failed}/>
        <Route path="/contact" component={Failed} />
        <Route path="/users" component={RenderUsers} />
        <Route path="/servers" component={RenderServers} />
        <Route path="/shaders" component={RenderShaders} />
        <Route path="/mods" component={RenderMods} />
        <Route path="/maps" component={RenderMaps} />
        <Route path="/skins" component={RenderSkins} />
        <Route path="/textures" component={RenderTextures} />
        <Route path="/delete" component={Delet} />
        <Route path="/update" component={Update} />
      </Switch></Router>
      </div>

   
       
    </div>

  )
}

export default MiddlePage;