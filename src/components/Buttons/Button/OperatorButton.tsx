import React from "react";

export function OperatorButton(props: { onClick: () => void, operator: string }) {
    return <button className="operator" onClick={props.onClick}>
        {props.operator}
    </button>;
}
