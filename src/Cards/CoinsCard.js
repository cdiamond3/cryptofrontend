import React from 'react'
import { Image, Card } from 'semantic-ui-react'

export default function CoinsCard(props) {
    return (
        <div>
            <Card.Group className="cardgroup">
                <Card color='blue' className="card1">
                    <Image className="coinsImage" src={props.coin.image} wrapped ui={false}/>
                    <p>{props.coin.name}</p>
                    <p>
                        Price: Fuck Everything
                    </p>
                    <p>
                        Rank:{props.coin.rank}
                    </p>
                </Card>
                <Card color='blue' className="card2">
                    <b> PLACEHOLDER </b>
                </Card>
            </Card.Group>
        </div>
    )
}
