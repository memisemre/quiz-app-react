import React from 'react';
import { number } from 'prop-types';

class EndPage extends React.Component {
  restart = () => {
    window.location.reload();
  };

  render() {
    const { trueAnswers, falseAnswers, invalidAnswers } = this.props;

    return (
      <div className='end-page-container'>
        <div className='true'>True Answers : {trueAnswers}</div>
        <div className='false'>False Answers : {falseAnswers} </div>
        <div className='invalid'>Invalid Answers : {invalidAnswers} </div>
        <button onClick={this.restart}>Restart Game</button>
      </div>
    );
  }
}

EndPage.propTypes = {
  trueAnswers: number.isRequired,
  falseAnswers: number.isRequired,
  invalidAnswers: number.isRequired
};

export default EndPage;
