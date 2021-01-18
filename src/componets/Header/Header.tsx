import React from 'react';
import {TiArrowBack} from 'react-icons/ti';
import {RouteComponentProps, withRouter} from 'react-router-dom';

type HeaderType = RouteComponentProps & {
  backIconShown: boolean,
};

const Header: React.FC<HeaderType> = (props) => {
  const backIconShown = props.backIconShown;
  const backToStartScreen = () => {
    props.history.goBack();
  };

  return (
    <div className="header">
      {backIconShown && <TiArrowBack color='#ffffff' size={50} className='header-icon' onClick={backToStartScreen}/>}
      <span className='header-text'>Let's play Tic Tac Toe!</span>
    </div>
  );
};

export default withRouter(Header);
