import React from 'react'


class StepProgressBar extends React.Component{
      render(){
            return(
                  <div className='step-progress-container'>
                        <ul>
                              <li>1</li>
                              <li>2</li>
                              <li className='false'>3</li>
                              <li className='true'>4</li>
                              <li className='active'>5</li>
                        </ul>
                  </div>
            )
      }
}
export default StepProgressBar;