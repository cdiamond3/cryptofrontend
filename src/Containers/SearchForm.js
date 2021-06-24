import React from 'react'
import { Form, Input } from "semantic-ui-react"

export default function SearchCharacterForm({filterCoins}) {

    return (
        <Form>
            <label>Search coin by name:   </label>
            <Input type="text" onChange={filterCoins}></Input>
        </Form>
    )
}
