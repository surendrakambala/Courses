import React from 'react';
import Html from '../../Lists/html';
import Css from '../../Lists/css';
import Bootstrap from '../../Lists/bootstrap';
import Javascript from '../../Lists/javascript';
import Jquery from '../../Lists/jquery';
import Reacts from '../../Lists/react';
import Vue from '../../Lists/vue';
import home from '../../Lists/home';
import {Route,Switch} from 'react-router-dom';


function HtmlRouter(){
    return(
        <div>
        <Switch>
            <Route path="/HTML" exact component={Html} />
            <Route path="/CSS" component={Css} />
            <Route path="/BOOT STRAP" component={Bootstrap} />
            <Route path="/JAVASCRIPT" component={Javascript} />
            <Route path="/REACT.JS" component={Reacts} />
            <Route path="/JQUERY" component={Jquery} />
            <Route path="/VUE.JS" component={Vue} />
            <Route path="/" component={home} />
</Switch>
        </div>
    
    );
}

export default HtmlRouter;
