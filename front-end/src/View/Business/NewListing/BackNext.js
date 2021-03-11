import React from "react";
import { Button } from "antd";
import "../NewListing/index.css";

const BackNext = () => {
    /*
        If (progress == Preview) {
            return (
                <div>
                    <Button>Back</Button>
                    <Button type="primary">Finish</Button>
                </div>
            )
        }
    */
    return (
        <div>
            <Button>Back</Button>
            <Button type="primary">Next</Button>
        </div>
    );
}

export default BackNext