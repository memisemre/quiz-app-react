import React from "react";
import Loader from "./components/loader/loader";
import QuestionArea from "./components/question/questionIndex";
class App extends React.Component{
      state = {
            isLoaded : false
      }
      componentDidMount(){
            setTimeout(()=>{ this.setState({ isLoaded: true }) } ,2500)
      }
      render(){
            return this.state.isLoaded ? <QuestionArea /> : <Loader />
      }
}
export default App;