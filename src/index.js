import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route} from 'react-router-dom';

import './css/index.css';
import App from './components/App';
import Skills from './components/Skills'
import Projects from './components/Projects'

const Root=()=>{
  return(
  <BrowserRouter>
    <div>
    <Route exact path="/" component={App}/>
    <Route path="/skills" component={Skills}/ >
    <Route path="/project" component={Projects}/>
   </div>
  </BrowserRouter>
);
}

ReactDOM.render(<Root/>, document.getElementById('root'));
