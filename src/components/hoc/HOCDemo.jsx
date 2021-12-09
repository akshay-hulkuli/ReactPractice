import { Button } from "@mui/material";
import React, { Component } from "react";
import Header from "../header/Header";
import './hoc.scss'

const HOC = (Component, data) => {
  //console.log("data", data);

  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: data,
      };
    }

    handleClick = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };

    render() {
      return (
        <Component
          
          CountNumber={this.state.count}
          handleCLick={this.handleClick}
        />
      );
    }
  };
};


class LikesCount extends Component {
  render() {
    return (
      <div style={{textAlign:'center'}}>
        <p>number of likes is : {this.props.CountNumber} </p>
        <Button variant="contained" color="secondary" onClick={this.props.handleCLick}>Like👍🏻</Button>
      </div>
    );
  }
}

const EnhancedLikes = HOC(LikesCount, 5);


export default function HOCDemo() {
  return (
    <React.Fragment>
      <Header/>
      <div class="hoc">
        <EnhancedLikes/>
        <p>here HOC takes a component and an initail state. Then return a new component</p>
      </div>
    </React.Fragment>
  )
}
