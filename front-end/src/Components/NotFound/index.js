import React from "react"
import {
  Result,
  Card
} from "antd"

const NotFound = () => {
  return (
    <Card>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, we could not find this page."
      />
    </Card>
  )
}

export default NotFound
