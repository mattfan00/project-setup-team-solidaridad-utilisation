import React from 'react'
import {Card} from 'antd'
import Common from './CommonQ'
import Extra from './ExtraQ'

const Responses = (props) => {
    return (
        <Card
        title='Responses'
        type='inner'
        >
            <Common ans = {props.commonQuestions}/>
            <Extra ans = {props.extraQuestions}/>
        </Card>
    )
}

export default Responses
