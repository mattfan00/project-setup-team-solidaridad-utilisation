import React from 'react'
import { Collapse} from 'antd'

const {Panel} = Collapse

const Extra = (props) => {
    return (
        <Collapse
            bordered={false}
        >
            <Panel
                header={'Q: ' + 'Why are you interesting in working with us?'}
            >
                {'A: ' + "Banana"}
            </Panel>
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