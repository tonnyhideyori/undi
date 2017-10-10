import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Router,Route} from 'react-router-dom';

import './css/index.css';
import App from './components/App';
import Skills from './components/Skills'
import Projects from './components/Projects'

const Root=()=>{
  return(
  <BrowserRouter basename="/tonnyhideyori">
    <div>
    <Route exact path="/undi/home" component={App}/>
    <Route path="/undi/skills" component={Skills}/ >
    <Route path="/undi/project" component={Projects}/>
   </div>
  </BrowserRouter>
);
}

ReactDOM.render(<Root/>, document.getElementById('root'));
