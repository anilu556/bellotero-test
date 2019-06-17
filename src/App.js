import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Testimonial from './components/Testimonial';
import Configurator from './components/Configurator';
import Navbar from './components/Navbar';

// //Redux
import {Provider} from 'react-redux';
import store from './store';

class App extends React.Component {
  render() {
    return (
      <Provider store ={store}>
        <React.Fragment>
            <Navbar />
            <Switch>
              <Route path="/page-1" component={Testimonial} />
              <Route path="/page-2" component={Configurator} />
            </Switch> 
        </React.Fragment> 
      </Provider>  
    );
  }  
}

export default App;
