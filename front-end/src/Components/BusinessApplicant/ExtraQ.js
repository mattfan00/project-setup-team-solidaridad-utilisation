import React from 'react'
import {Card, Collapse} from 'antd'

const {Panel} = Collapse

const Extra = (props) => {
    return (
        <Collapse
            bordered={false}
        >
            <Panel
                header={'Q: '}
            >
                {'A: '}
            </Panel>
            {props.questions && props.questions.map(q => 
                <Panel
                    header={'Q: '+q.question}
                >
                    {"A: "+q.answer}
                </Panel>
            )}
        </Collapse>
    )
}

export default Extra