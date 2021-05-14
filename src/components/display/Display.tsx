import React from "react";

type DisplayParams = {
    value: number;
    setValue: (value: number) => void
};

export function DisplayCalc(props: DisplayParams) {
    const { value, setValue } = props;

    return (
        <div className="input-area">
            <input
                type="text"
                id="inputArea"
                value={value}
                onChange={(e) => {
                    setValue(Number(e.target.value));
                }}
                ref={(input) => input && input.focus()}
            />
        </div>
    );
}
