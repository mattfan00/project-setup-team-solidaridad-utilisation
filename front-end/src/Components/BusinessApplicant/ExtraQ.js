import React from 'react'
import {Card} from 'antd'

const Extra = (props) => {
    return (
        <Card
            title='Extra Questions'
            extra = {
                <div>
                    {props.extraQuestionCount}
                </div>
            } 
        >
            <Card
                title="extraquestion"
                type='inner'
            >
                response
            </Card>
            {props.questions && props.questions.map(q => 
                <Card
                title={q.question}
                type='inner'
                >
                    {q.response}
                </Card>    
            )}
        </Card>
    )
}

export default Extra