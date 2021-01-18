import React from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';

const StartScreen: React.FC<RouteComponentProps> = ({history}) => {
  const navigateToGame = () => {
    history.push('/game');
  };

  return (
    <div className='start-screen'>
      <button className='start-button' onClick={navigateToGame}>Start Game</button>
    </div>
  );
};

export default withRouter(StartScreen);