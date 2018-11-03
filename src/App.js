import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      show : false
    }
  }

  isShow = () => {
    this.setState({
        show : true
    });
  };

  isHide = () => {
    this.setState({
        show: false
    });
  };

  render() {
    return (
      <div className={"hover"} onMouseOver={this.isShow} onMouseOut={this.isHide}>
        adasdad
        <div className={this.state.show ? "show" : "hide"}>
          this is tooltip
        </div>
      </div>
    );
  }
}

export default App;
