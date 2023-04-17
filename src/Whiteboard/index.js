import React, { useState, forwardRef } from "react";

import "./styles.scss";

function Whiteboard(props, ref) {
    return (
        <canvas
            id="whiteboard"
            width={props.width}
            height={props.height}
            ref={ref}
        />
    );
}

export default forwardRef(Whiteboard);