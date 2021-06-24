import React, { Component } from 'react'
import MenuArea from "./Containers/MenuArea";
import HeadingArea from "./Containers/HeadingArea";
import "./App.css"
import BodyArea from "./Containers/BodyArea";
import SideMenu from "./Containers/SideMenu";

export default class App extends Component {

  state = {
    frontCoins: [],
    chartInfo: [],
    allCoins: [],
    myCoins: [],
    filteredCoins: []
  }

  
  
  
  componentDidMount() {
    this.getCoins()
  }
  
  getCoins = () => {
    fetch("http://localhost:3000/coins")
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({ frontCoins: data.slice(0, 50) })
      console.log("this worked")
    })
  }
  
  
    filterCoins = (event) => {
      event.preventDefault()
      const filterCoins = this.state.frontCoins.filter(coin => (
          coin.name.toLowerCase().includes(event.target.value.toLowerCase())))
          this.setState({frontCoins: filterCoins})
        }
  
  setMyCoins = (userInput) => {
    this.setState({ myCoins: [...this.state.myCoins, userInput]})
    fetch("http://localhost:3000/input", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userInput
      })
    })
  }

  render() {
    return (
      <div className="App">
        <HeadingArea />
        <MenuArea />
        <div className="aboveMainArea">
        <SideMenu userInput={this.state.myCoins} coin={this.state.frontCoins}/> 
        </div>
        <BodyArea coinData={this.state.frontCoins} setMyCoins={this.setMyCoins} filterCoins={this.filterCoins}/>
      </div>
    )
  }
}


