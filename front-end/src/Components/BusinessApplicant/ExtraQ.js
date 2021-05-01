import React from 'react'
import { Collapse} from 'antd'

const {Panel} = Collapse

const Extra = (props) => {
    return (
        <Collapse
            bordered={false}
        >
            {props.extraQ && props.extraQ.map((q, i) =>
                <Panel
                    key={i}
                    header={'Q: '+q.question}
                >
                    {"A: "+q.answer}
                </Panel>
            )}
        </Collapse>
    )
}

export default Extra