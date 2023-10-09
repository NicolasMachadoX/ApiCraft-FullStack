import Header from './Components/structure/Header';
import MiddlePage from './Components/structure/MiddlePage';

import './App.css'
import Search from './Components/reusables/Search.js';

const App = ()=>{

return(
 
  <div className='bodyPage'>

       <div className='shadowDiv'></div>

        <Header/>

        <div className='space'>
        <Search></Search>
        </div>

        <MiddlePage/>

  </div>
)

}


export default App;