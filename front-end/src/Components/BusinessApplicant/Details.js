import React from 'react'
import AddressElem from './AddressElem'
import {Descriptions} from 'antd'

/**
 *
 * @param {*} props has the details array, with all strings excluding the address
 * @returns a block of all the applicants details, ordered
 */
const Details = (props) => {

    // checks whether a field exists in the details object or not, not working???
    const display = (fieldname) => {
        return props.Details.hasOwnProperty(fieldname)
    }

    return (
        <Descriptions column={1} bordered>
            {display("email") ?
            <Descriptions.Item label = "Email">
                {props.Details.email}
            </Descriptions.Item> : ""}
            {display("phone") ?
            <Descriptions.Item label = "Primary Phone">
                {props.Details.phone}
            </Descriptions.Item> : ""}
            {display("address") ? <Descriptions.Item label = "Address">
                {
                    props.Details.address.address + " " +
                    props.Details.address.city + ", " +
                    props.Details.address.state + " " +
                    props.Details.address.country + " " +
                    props.Details.address.postalCode
                }
            </Descriptions.Item> : ""}
            {display("gender") ? <Descriptions.Item label = "Gender">
                {props.Details.gender}
            </Descriptions.Item> : ""}
            {display("disability") ? <Descriptions.Item label = "Disability">
                {props.Details.disability}
            </Descriptions.Item> : ""}
            {display("hispanic-latino") ? <Descriptions.Item label = "Hispanic/Latino">
                {props.Details["hispanic-latino"]}
            </Descriptions.Item> : ""}
            {display("veteran") ? <Descriptions.Item label = "Veteran">
                {props.Details.veteran}
            </Descriptions.Item> : ""}
            {display("workAuth") ? <Descriptions.Item label = "Work Authorization">
            {props.Details.workAuth}
                </Descriptions.Item> : ""}
            {display("website") ? <Descriptions.Item label = "Website">
                {props.Details.website}
            </Descriptions.Item> : ""}
            {display("linkedin") ? <Descriptions.Item label = "Linkedin">
                {props.Details.linkedin}
            </Descriptions.Item> : ""}
        </Descriptions>
    )
}

export default Details