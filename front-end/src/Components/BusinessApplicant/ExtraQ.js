import React from 'react'
import { Collapse} from 'antd'

const {Panel} = Collapse

const Extra = (props) => {
    return (
        <Collapse
            bordered={false}
        >
            {props.extraQ && props.extraQ.map(q => 
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