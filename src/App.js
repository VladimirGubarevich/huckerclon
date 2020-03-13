import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import NewStories from './pages/NewStories';
import TopStories from './pages/TopStories';
import TopQuestions from './pages/TopQuestions';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={NewStories} />
        <Route path='/new-story' component={NewStories} />
        <Route path='/top-stories' component={TopStories} />
        <Route path='/top-questions' component={TopQuestions} />
        <Route path={`/?page=`} component={NewStories} />
        <Redirect to='/new-story' component={NewStories}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
