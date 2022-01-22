import React from 'react';
import { Route, Switch } from 'react-router';
import CovidPage from './pages/CovidPage';
import MedicalCheckPage from './pages/MedicalCheckPage';
import PharmacyPage from './pages/PharmacyPage';

// 테스트용 주석
function App() {
  return (
    <Switch>
      <Route path="/" exact component={MedicalCheckPage} />
      <Route path="/covid" component={CovidPage} />
      <Route path="/pharmacy" component={PharmacyPage} />
    </Switch>
  );
}

export default App;
