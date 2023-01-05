import React from 'react';
import EndPage from '../endPage/endPage';
import Questions from './questions.json';
class QuestionArea extends React.Component {
	state = {
		questionIndex: 0,
		trueAnswers: 0,
		falseAnswers: 0,
		timerValue: 0,
		invalidAnswers : 0
	}
	checkAnswer = (answerOption, trueAnswer) => {
		answerOption === trueAnswer ? (
			this.setState({ trueAnswers: this.state.trueAnswers + 1 })
		) : (
			this.setState({ falseAnswers: this.state.falseAnswers + 1 })
		)
	}
	changeQuestion = () => {
		if(this.state.questionIndex !== Questions.length){
			this.setState({ questionIndex: this.state.questionIndex + 1 })
			this.timer();
		}
	}
	componentDidMount() {
		this.timer();
	}
	timer = () => {
		clearInterval(this.interval);
		this.setState({ timerValue: 5 });
		this.interval = setInterval(() => {
			this.setState({
				timerValue : this.state.timerValue -1
			})
			if (this.state.timerValue === 0) {
				clearInterval(this.interval);
				this.changeQuestion();
				this.setState({invalidAnswers : this.state.invalidAnswers +1});
			}
		}, 1000);
	}
	render() {
		const activeQuestion = Questions[this.state.questionIndex];
		if (this.state.questionIndex === Questions.length){
			clearInterval(this.interval)
			return <EndPage
				trueAnswers={this.state.trueAnswers}
				falseAnswers={this.state.falseAnswers}
				invalidAnswers = {this.state.invalidAnswers}
			/>
		}
		else {
			return (
				<div className='question-container'>
					<h1>{activeQuestion.qeustion}</h1>
					<div className='answers-container'>
						{activeQuestion.answerOptions.map(answerOption =>
							<button
								onClick={()=>{
									this.checkAnswer(answerOption, activeQuestion.trueAnswer)
									this.changeQuestion()
								}}
								key={answerOption}>
								{answerOption}
							</button>)}
					</div>
					<h1> {this.state.timerValue} </h1>
				</div>
			)
		}
	}
}
export default QuestionArea;