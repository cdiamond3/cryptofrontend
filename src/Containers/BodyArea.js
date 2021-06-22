import React from 'react'
import { Header } from 'semantic-ui-react'
import CoinsCard from '../Cards/CoinsCard'

export default function BodyArea(props) {

    const renderCoinCard = () => {
        return props.coinData.map(coin => {
            return <CoinsCard coin={coin}/>
        })
    }

    return (
        <div>
            <Header> Daily Movers! </Header>
            <br></br>
            {renderCoinCard()}
        </div>
    )
}
