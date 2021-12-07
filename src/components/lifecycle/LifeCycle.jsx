import { Button, Divider, TextField } from '@mui/material';
import React, { Component } from 'react'
import Header from '../header/Header';
import './lifecycle.scss';

export class LifeCycle extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <div className="lifecycle">
                    <div className="section">
                        <ConstructorDemo/>
                        <GetDerivedStateFromPropsDemo favcol='blue'/>
                        <RenderDemo/>
                        <ComponentDidMountDemo />
                    </div>
                    <div className="section">
                        <GetDerivedStateFromPropsDemo2 favcol="yellow"/>
                        <ComponentShouldUpdateDemo/>
                        <GetSnapshotBeforeUpdateDemo/>
                        <ComponentDidUpdateDemo/>
                    </div>
                    <div className="section">
                        <Container/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default LifeCycle;


class ConstructorDemo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }
    render() {
      return (
          <div className="lifecycle-method">
                <h2>1] Constructor:</h2>
                <h3>My Favorite Color is {this.state.favoritecolor}</h3>
                <p>color is taken from this.state.favoritecolor, state is set in the constructor</p>
          </div>
      );
    }
}

class GetDerivedStateFromPropsDemo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }
    static getDerivedStateFromProps(props, state) {
      return {favoritecolor: props.favcol };
    }
    render() {
      return (
            <div className="lifecycle-method">
                <h2>2] getDerivedStateFromProps </h2>
                <h3>My Favorite Color is {this.state.favoritecolor}</h3>
                <p>color blue is sent as a prop, color set by constructor will be over written</p>
            </div>
      );
    }
}


class RenderDemo extends React.Component {
    render() {
      return (
          <div className="lifecycle-method">
              <h2>3] Render</h2>
              <p>this is method is mandatory and actually outputs the HTML to the DOM.</p>
          </div>
        
      );
    }
}

class ComponentDidMountDemo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }
    componentDidMount() {
      setTimeout(() => {
        this.setState({favoritecolor: "yellow"})
      }, 2000)
    }
    render() {
      return (
        <div className="lifecycle-method">
              <h2>4] ComponentDidMount</h2>
              <h3>My Favorite Color is {this.state.favoritecolor}</h3>
              <p>This is gets excuted after component is mounted,favcolor changes to yellow</p>
        </div>
      );
    }
}
  


class GetDerivedStateFromPropsDemo2 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }
    static getDerivedStateFromProps(props, state) {
      return {favoritecolor: props.favcol };
    }
    changeColor = () => {
      this.setState({favoritecolor: "blue"});
    }
    render() {
      return (
        <div className="lifecycle-method">
            <h2>1] getDerivedStateFromProps </h2>
            <h3>My Favorite Color is {this.state.favoritecolor}</h3>
            <Button variant="contained" color='secondary' onClick={this.changeColor}>Change color</Button>
            <p>even though change color is invoked, getDerivedStateFromProps is taking color from props</p>
        </div>
      );
    }
}


class ComponentShouldUpdateDemo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red", flag: true};
    }
    shouldComponentUpdate() {
      return this.state.flag;
    }
    changeColor = () => {

      this.setState({favoritecolor: this.state.favoritecolor === 'blue' ? 'red': 'blue'});
    }
    changeFlag = () => {
        var a  = this.state.flag;
        this.setState({flag: !a});
    }
    render() {
      return (
        <div className="lifecycle-method">
            <h2>2] shouldComponentUpdate </h2>
            <Button onClick={this.changeFlag} color="secondary" variant="contained">change componentShouldUpdate</Button>
            <h3>My Favorite Color is {this.state.favoritecolor}</h3>
            <Button color="secondary" variant="contained" onClick={this.changeColor}>Change color</Button>
            <p>if this method returns true then component is allowed to get updated, otherwise not.</p>
        </div>
      );
    }
}


class ComponentDidUpdateDemo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }
    componentDidMount() {
      setTimeout(() => {
        this.setState({favoritecolor: "yellow"})
      }, 3000)
    }
    componentDidUpdate() {
      document.getElementById("mydiv").innerHTML =
      "The updated favorite is " + this.state.favoritecolor;
    }
    render() {
      return (
        <div className="lifecycle-method">
            <h2>5]componentDidUpdate</h2>
            <h3>My Favorite Color is {this.state.favoritecolor}</h3>
            <div id="mydiv"></div>
        </div>
      );
    }
}
  


class GetSnapshotBeforeUpdateDemo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name: "akshay"};
    }

    handleChange = () =>{
       const elem = document.getElementById('name');
       this.setState({name: elem.value});
    }
    

    getSnapshotBeforeUpdate(prevProps, prevState) {
      document.getElementById("div1").innerHTML =
      "Before the update, the favorite was " + prevState.name;
    }
    componentDidUpdate() {
      document.getElementById("div2").innerHTML =
      "The updated favorite is " + this.state.name;
    }
    render() {
      return (
        <div className="lifecycle-method">
            <h2>4]getSnapshotBeforeUpdate</h2>
          <h3>My Name is {this.state.name}</h3>
            <TextField
                // value={this.name}
                variant="outlined"
                fullWidth
                id = "name"
                size="small"
            />
            
            <Button variant="contained" color="secondary" sx={{marginTop:'20px'}} onClick={this.handleChange}>submit name </Button>
          <div id="div1"></div>
          <div id="div2"></div>
        </div>
      );
    }
}



class Container extends React.Component {
    constructor(props) {
      super(props);
      this.state = {show: true};
    }
    delHeader = () => {
      this.setState({show: false});
    }
    render() {
      let myheader;
      if (this.state.show) {
        myheader = <Child />;
      };
      return (
        <div>
            <h2>1]componentWillUnmount</h2>
            {myheader}

            <Button color="secondary" variant="contained" onClick={this.delHeader}>Delete Header</Button>
        </div>
      );
    }
}
  
class Child extends React.Component {
    componentWillUnmount() {
      alert("The component named Header is about to be unmounted.");
    }
    render() {
      return (
        <h2>this is the header</h2>
      );
    }
}