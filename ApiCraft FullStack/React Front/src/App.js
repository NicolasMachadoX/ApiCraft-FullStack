import Header from './Components/structure/Header';
import MiddlePage from './Components/structure/MiddlePage';
import RenderUsers from './InicialComponent'
import './App.css'

const App = ()=>{

return(
  <div className='bodyPage'>
   <div className='shadow'></div>   
  <Header/>

  <MiddlePage/>

<RenderUsers></RenderUsers>
  </div>
)

}


export default App;