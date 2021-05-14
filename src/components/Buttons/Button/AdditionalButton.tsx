import React from "react";

export function AdditionalButton(props: { onClick: (e: any) => void, operator: string }) {
    return <button className="first-row-column" value={String(props.operator)} onClick={props.onClick}>
        {props.operator}
    </button>;
}
