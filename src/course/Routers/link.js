import React from 'react';
import {Link} from 'react-router-dom';

function LinkRouter(){
return(
    <div>
  
    <Link to="/HTML">Html</Link> <br />
     <Link to="/CSS">Css</Link> <br />
     <Link to="/BOOT STRAP">Bootstrap</Link><br />
     <Link to="/JAVASCRIPT">javascript</Link><br />
     <Link to="/REACT.JS">React</Link><br />
     <Link to="/JQUERY">Jquery</Link><br />
     <Link to="/VUE.JS">Vue</Link><br />

     </div>
)
}
export default LinkRouter;

export function HomeRouter(){
    return(
        <Link activeClassName='is-active' to="/">Home</Link> 
    )
}

