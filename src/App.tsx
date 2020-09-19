import React from 'react';
import './App.css';
import FeatureToggleListPage from "./feature-toggle-list-page/FeatureToggleListPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import EditFeatureTogglePage from "./edit-feature-toggle-page/EditFeatureTogglePage";

function App() {
  return (
      <Router>
        <Switch>
          <Route component={EditFeatureTogglePage} path="/feature-toggles/:id" />
          <Route component={FeatureToggleListPage} path="/" />
        </Switch>
      </Router>
  );
}

export default App;
