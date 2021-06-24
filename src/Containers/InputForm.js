import React, { Component } from 'react'
import { Form, Button, Icon } from "semantic-ui-react"

export default class inputForm extends Component {
    state = {
        userInputValue: "",
    }

    handleChange = (e) => {
        this.setState({ userInputValue: e.target.value })
        console.log(this.state.userInputValue.legnth)
    }


    handleClick = (e) => {
        e.preventDefault()
        console.log(this.props.coin.name, this.state.userInputValue)
        this.props.setMyCoins(`${this.props.coin.name}: $${this.state.userInputValue}`)
        return this.state.myCoins
    }

    render() {
        return (
            <div>
                <Form>
                    <input
                        placeholder="Amount Purchased"
                        type="text"
                        value={this.state.userInputValue}
                        onChange={this.handleChange}>
                    </input>
                    <Button animated onClick={(e) => this.handleClick(e)}>
                        <Button.Content visible>Add To Portfolio</Button.Content>
                        <Button.Content hidden>
                            <Icon name='dollar sign' />
                        </Button.Content>
                    </Button>
                </Form>
            </div>
        )
    }
}
