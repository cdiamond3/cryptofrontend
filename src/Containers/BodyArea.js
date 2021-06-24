import React from 'react'
import { Header, Menu } from 'semantic-ui-react'
import CoinsCard from '../Cards/CoinsCard'
import SearchForm from './SearchForm'

export default function BodyArea(props) {

    const renderCoinCard = () => {
        return props.coinData.map(coin => {
            return <CoinsCard coin={coin} setMyCoins={props.setMyCoins}/>
        })
    }


    return (
        <div>
            <Menu.Item>
                    <SearchForm filterCoins={props.filterCoins} />
                </Menu.Item>
            <Header> Daily Movers! </Header>
            {renderCoinCard()}
        </div>
    )
}
