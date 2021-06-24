import React, { Component } from 'react'
import { Menu, Header, Card } from "semantic-ui-react"
import MyPortfolio from './MyPortfolio'

export default class MenuArea extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <div className="sideMenu">
                <br></br>
                <Menu vertical>
                    <Menu.Item
                        name='promotions'
                        active={activeItem === 'promotions'}
                        onClick={this.handleItemClick}
                    >
                        <Header as='h4'>Crypto News</Header>
                        <p>Check out our new promotions</p>
                    </Menu.Item>

                    <Menu.Item
                        name='coupons'
                        active={activeItem === 'coupons'}
                        onClick={this.handleItemClick}
                    >
                        <Header as='h4'>Top Brokers</Header>
                        <a>crypto.com</a>
                        <br></br>
                        <a>coinbase.com</a>
                        <br></br>
                        <a>binance.us</a>
                    </Menu.Item>
                </Menu>
                <Menu vertical>
                    <Menu.Item
                        name='promotions'
                        active={activeItem === 'promotions'}
                        onClick={this.handleItemClick}
                    >
                        <Header as='h4'>Investor Advice</Header>
                    </Menu.Item>
                    <Menu.Item
                        name='promotions'
                        active={activeItem === 'promotions'}
                        onClick={this.handleItemClick}
                    >
                        <Header as='h4'>Doge Coin</Header>
                        <p>More Than A Meme!</p>
                    </Menu.Item>
                    <Menu.Item
                        name='promotions'
                        active={activeItem === 'promotions'}
                        onClick={this.handleItemClick}
                    >
                        <Header as='h4'>Paper Hands:</Header>
                        <p>HODL AND ACT LIKE YOU WANT THE DIPS!</p>
                    </Menu.Item>
                    <Menu.Item
                        name='promotions'
                        active={activeItem === 'promotions'}
                        onClick={this.handleItemClick}
                    >
                        <Header as='h4'>New Buyers!</Header>
                        <p>IT'S JUST AN 80% DROP! CALM DOWN!</p>
                    </Menu.Item>
                </Menu>
                <Card className="card4">
                    <MyPortfolio userInput={this.props.userInput} coinInfo={this.props.coinInfo} coin={this.props.coin}/>
                </Card>
            </div>
        )
    }
}