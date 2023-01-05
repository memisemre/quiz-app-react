import React from 'react';
import EndPage from '../endPage';
import questionList from './questions.json';
class QuestionArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionIndex: 0,
      trueAnswers: 0,
      falseAnswers: 0,
      timerValue: 0,
      invalidAnswers : 0
    };
    this.interval = null;
  }

  componentDidMount() {
    this.timer();
  }

  checkAnswer = (answerOption, trueAnswer) => {
    answerOption === trueAnswer ? (
      this.setState({ trueAnswers: this.state.trueAnswers + 1 })
    ) : (
      this.setState({ falseAnswers: this.state.falseAnswers + 1 })
    );
  };

  changeQuestion = () => {
    if (this.state.questionIndex !== questionList.length) {
      this.setState({ questionIndex: this.state.questionIndex + 1 });
      this.timer();
    }
  };

  handleTimeEnd = () => {
    this.setState({ invalidAnswers: this.state.invalidAnswers + 1 });
    this.changeQuestion();
  };

  timer = () => {
    clearInterval(this.interval);

    this.setState({ timerValue: 5 });

    this.interval = setInterval(() => {
      this.setState({ timerValue: this.state.timerValue - 1 });

      if (this.state.timerValue === 0) {
        this.handleTimeEnd();
      }
    }, 1000);
  };

  render() {
    const activeQuestion = questionList[this.state.questionIndex];
    const isQuizEnd = this.state.questionIndex === questionList.length;

    if (isQuizEnd){
      clearInterval(this.interval);

      return (
        <EndPage
          trueAnswers={this.state.trueAnswers}
          falseAnswers={this.state.falseAnswers}
          invalidAnswers={this.state.invalidAnswers}
        />
      );
    }

    return (
      <div className='question-container'>
        <h1>{activeQuestion.qeustion}</h1>
        <div className='answers-container'>
          {activeQuestion.answerOptions.map(answerOption =>
            <button
              onClick={()=>{
                this.checkAnswer(answerOption, activeQuestion.trueAnswer);
                this.changeQuestion();
              }}
              key={answerOption}>
              {answerOption}
            </button>)}
        </div>
        <h1> {this.state.timerValue} </h1>
      </div>
    );
  }
}
export default QuestionArea;