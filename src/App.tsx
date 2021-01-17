import React from 'react';
import './index.scss';
import Grid from "./componets/Grid/Grid";
import Header from "./componets/Header";

const App = () => {
  return (
      <div className="app-container">
        <Header />
        <Grid />
      </div>
  );
};

export default App;
