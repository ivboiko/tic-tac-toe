import React, {useState} from 'react';
import './index.scss';
import Grid from './componets/Grid/Grid';
import Header from './componets/Header/Header';
import StartScreen from './componets/StartScreen/StartScreen';
import {Route} from 'react-router-dom';

const App = () => {
  const [backIconShown,  setBackIconShown] = useState<boolean>(false);

  return (
    <div className="app-container">
      <Header backIconShown={backIconShown} />
      <Route exact path='/' render={() => <StartScreen />} />
      <Route path='/game' render={() => <Grid setBackIconShown={setBackIconShown} />} />
    </div>
  );
};

export default App;
