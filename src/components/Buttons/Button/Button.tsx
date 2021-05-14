import React from "react";

export function Button(props: { onClick: (e: any) => void, number: number }) {
    return <button value={String(props.number)} onClick={props.onClick}>
        {props.number}
    </button>;
}
