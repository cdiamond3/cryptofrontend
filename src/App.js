import React, { Component } from 'react'
import MenuArea from "./Containers/MenuArea";
import HeadingArea from "./Containers/HeadingArea";
import "./App.css"
import BodyArea from "./Containers/BodyArea";
import SideMenu from "./Containers/SideMenu";

export default class App extends Component {
  state = {
    allCoins: [],
  }

  componentDidMount() {
    fetch("http://localhost:3000/coins")
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({ allCoins: data })
      console.log("this worked")
    })
  }

  render() {
    return (
      <div className="App">
        <HeadingArea />
        <MenuArea />
        <SideMenu />
        <br></br>
        <BodyArea coinData={this.state.allCoins}/>

      </div>
    )
  }
}
