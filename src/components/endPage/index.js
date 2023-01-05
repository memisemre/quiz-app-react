import React from 'react';
import App from '../../App';
class EndPage extends React.Component {
  state = {
    restartGame: false
  };
  render() {
    if (this.state.restartGame === false) {
      const { trueAnswers, falseAnswers, invalidAnswers } = this.props;
      return (
        <div className='end-page-container'>
          <div className='true'>True Answers : {trueAnswers}</div>
          <div className='false'>False Answers : {falseAnswers} </div>
          <div className='invalid'>Invalid Answers : {invalidAnswers} </div>
          <button onClick={() => { this.setState({ restartGame: true }); }}>Restart Game</button>
        </div>
      );
    }
    else {
      return <App />;
    }
  }
}

export default EndPage;
