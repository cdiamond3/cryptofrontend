import { Container, Card, Header } from 'semantic-ui-react'
import React, { Component } from 'react'

export default class MyPortfolio extends Component {
    

    dateLabel = new Date


    render() {
        return (
            <div >
                <Card>
                    <Header>
                    My Recent Spending:
                    </Header>
                    <Card.Description className="portfolioCard">
                    {this.props.userInput.map(input => {
                        return `${input}, ${this.dateLabel}`
                    })}
                    </Card.Description>
                </Card>
            </div>
        )
    }
}
