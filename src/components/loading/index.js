import React from "react";

class Loading extends React.Component {
  render() {
    return (
      <div className="loader-container">
        <div className="half-ball top-ball"></div>
        <div className="center-ball">
          <div className="dot"></div>
        </div>
        <div className="half-ball bottom-ball"></div>
      </div>
    );
  }
}
export default Loading;
