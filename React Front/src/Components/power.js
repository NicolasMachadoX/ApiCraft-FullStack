import React, {Fragment} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "../App";
const Power = ( )=>{

return(

<Fragment>
    <Router>
    <ul>
        <li>

            <Link to='/'>Principal Page</Link>

        </li>
    </ul>
    </Router>
</Fragment>

)


}
export default Power;
