import React from "react";
import Loading from "./components/loading";
import QuestionArea from "./components/question";
class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = { isLoaded: false };
  }

  componentDidMount(){
    setTimeout(()=>{ this.setState({ isLoaded: true }); }, 2500);
  }

  render(){
    return this.state.isLoaded ? <QuestionArea /> : <Loading />;
  }
}
export default App;