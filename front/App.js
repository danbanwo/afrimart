import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

//Components
import Homepage from './components/homepage'
import Navbar from './components/navbar'

const App = () => {
    return (
      <div>
        <Navbar />
        <Homepage />
      </div>
    )
  }


render(<Router history={browserHistory}>
  <Route path='/' component={App} />
</Router>, document.getElementById('root'))
