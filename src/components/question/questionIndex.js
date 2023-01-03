import React from 'react';
import EndPage from '../endPage/endPage';
import Questions from './questions.json';
class QuestionArea extends React.Component {
	state = {
		questionIndex: 0,
		trueAnswers: 0,
		falseAnswers: 0
	}
	checkAnswer = (answerOption, trueAnswer) => {
		if (answerOption === trueAnswer) this.setState({ trueAnswers: this.state.trueAnswers + 1 })
		else this.setState({ falseAnswers: this.state.falseAnswers + 1 })
	}
	changeQuestion = () => this.setState({ questionIndex: this.state.questionIndex + 1 })
	render() {
		const activeQuestion = Questions[this.state.questionIndex];
		if (this.state.questionIndex === Questions.length) {
			return <EndPage
				trueAnswers={this.state.trueAnswers}
				falseAnswers={this.state.falseAnswers}
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
				</div>
			)
		}
	}
}
export default QuestionArea;