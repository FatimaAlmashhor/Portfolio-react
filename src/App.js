import React from 'react';
import { AnimatePresence } from "framer-motion"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.scss';
import Home from './containers/Home'
import ProjectsMenu from './components/ProjectsMenu/ProjectsMenu'
import Cursor from './components/Cursor/Cursor'
function App() {
  return (
    <Router>
      <AnimatePresence>
        <Switch>
          <Route path="/" component={Home} />
          <Route exact path="/projects-menu" component={ProjectsMenu} />
        </Switch>
      </AnimatePresence>
    </Router>
  );
}

export default App;
