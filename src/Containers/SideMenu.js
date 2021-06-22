import React, { Component } from 'react'
import { Menu, Header } from "semantic-ui-react"

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
            </div>
        )
    }
}