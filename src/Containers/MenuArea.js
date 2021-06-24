import React, { Component } from 'react'
import { Menu, Card } from "semantic-ui-react"
import SearchForm from './SearchForm'

export default class MenuArea extends Component {
    state = {}
    refreshPage = ()=>{
        window.location.reload();
     }
    render() {
        const { activeItem } = this.state
        return (
            <div>
                <Menu pointing secondary className="menuArea">
                    <Menu.Item
                        name='home'
                        active={activeItem === 'home'}
                        onClick={this.refreshPage}
                    />
                    <Menu.Menu position='right'>
                        <Menu.Item
                            name='Menu'
                            active={activeItem === 'logout'}
                            onClick={this.handleItemClick}
                        />
                    </Menu.Menu>
                </Menu>
                
            </div>
        )
    }
}
