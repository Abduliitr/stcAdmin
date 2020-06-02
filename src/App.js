import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './components/Home';
import CreateUser from './components/CreateUser';
import CreateProject from './components/CreateProject';
import CreateNotice from './components/CreateNotice';
import CreateEvent from './components/CreateEvent';
import CreateAchievement from './components/CreateAchievement';
import CreateAward from './components/CreateAward';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Home} />
        <Route exact path="/create/user" component={CreateUser} />
        <Route exact path="/create/project" component={CreateProject} />
        <Route exact path="/create/notice" component={CreateNotice} />
        <Route exact path="/create/event" component={CreateEvent} />
        <Route exact path="/create/achievement" component={CreateAchievement} />
        <Route exact path="/create/award" component={CreateAward} />
        <Redirect to="/home"/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
