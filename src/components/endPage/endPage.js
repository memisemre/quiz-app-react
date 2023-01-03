import React from 'react';
class EndPage extends React.Component{
      render(){
            const {trueAnswers , falseAnswers} = this.props;
            return(
                  <div className='end-page-container'>
                        <div className='true'>True Answers : {trueAnswers}</div>
                        <div className='false'>False Answers : {falseAnswers} </div>
                  </div>
            )
      }
}
export default EndPage;
