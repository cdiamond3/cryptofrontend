import React from 'react'
import { Image, Card, Segment } from 'semantic-ui-react'
import ChartsCard from './ChartsCard'
import InputForm from '../Containers/InputForm'
import { Tweet, Hashtag } from 'react-twitter-widgets'

export default function CoinsCard(props) {
    return (
        <div>
            {
                props.coin.current_price >= ((props.coin.high_24h) - .005 )
                    ?
                    <Card.Group className="cardgroup-positive">
                        <Card color='blue' className="card1">
                            <Image className="ui avatar image" src={props.coin.image} wrapped ui={false} />
                            
                            <Card.Content>
                                <Card.Header className>{props.coin.name}</Card.Header>
                                <Card.Description>
                                    Price: ${props.coin.current_price}
                                </Card.Description>
                                <Card.Meta>
                                    24 Hour High: ${props.coin.high_24h}
                                    <br></br>
                                    24 Hour Low: ${props.coin.low_24h}
                                </Card.Meta>
                                <Card>
                                    Rank:{props.coin.market_cap_rank}
                                </Card>
                                <InputForm coin={props.coin} setMyCoins={props.setMyCoins}/>
                            </Card.Content>
                        </Card>
                        <Card color='blue' className="card2">
                            <ChartsCard coin={props.coin} />
                        </Card>
                        <Card color='blue' className="card3">
                            <Card.Content>
                            <Card.Header className>Should I Buy {props.coin.name}? </Card.Header>
                            <Card.Description>
                                Price: ${props.coin.current_price}
                                <Tweet className="card3" tweetId="1391523807148527620" />
                                <Hashtag hashtag="#crypto" />
                            </Card.Description>
                            </Card.Content>
                        </Card>
                    </Card.Group>
                    :
                    <Card.Group className="cardgroup-negative">
                        <Card color='blue' id="card1">
                            <Image className="ui avatar image" src={props.coin.image} wrapped ui={false} />
                            <Card.Content className="contentForCards">
                                <Card.Header className='cardHeader'>{props.coin.name}</Card.Header>
                                <Card.Description>
                                    Price: ${props.coin.current_price}
                                </Card.Description>
                                <Card.Meta >
                                    24 Hour High: ${props.coin.high_24h}
                                </Card.Meta>
                                <Card.Meta>
                                    24 Hour Low: ${props.coin.low_24h}
                                </Card.Meta>
                                <Card.Description>
                                    Rank:{props.coin.market_cap_rank}
                                </Card.Description>
                                <InputForm coin={props.coin} setMyCoins={props.setMyCoins} />
                            </Card.Content>
                        </Card>
                        <Card color='blue' className="card2">
                            <ChartsCard coin={props.coin} />
                        </Card>
                        <Card color='blue' className="card3">
                            <Image className="ui avatar image" src={props.coin.image} wrapped ui={false} />
                            <Card.Content>
                                <Card.Header className>Should I Buy {props.coin.name}? </Card.Header>
                                <Card.Description>
                                    Price: ${props.coin.current_price}
                                    <Tweet className="card3" tweetId="1392985728271884288" />
                                    <Hashtag hashtag="#crypto" />
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </Card.Group>
            }
        </div>
    )
}
