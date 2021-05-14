import React from "react";
import { AdditionalButton } from "../Buttons/Button/AdditionalButton";
import { Button } from "../Buttons/Button/Button";
import { OperatorButton } from "../Buttons/Button/OperatorButton";


type CalcBodyTypes = {
    onHandleReset: () => void,
    onHandleInput: (e: any) => void,
    onHandleDiv: () => void,
    onHandleMul: () => void,
    onHandleSub: () => void,
    onHandleAdd: () => void,
    onHandleEquals: () => void
};

export function CalcBody(props: CalcBodyTypes) {
    return <div className="cal-body">
        <AdditionalButton operator={"AC"} onClick={props.onHandleReset}/>
        <AdditionalButton operator={"%"} onClick={props.onHandleInput}/>
        <AdditionalButton operator={"+/-"} onClick={props.onHandleInput}/>
        <OperatorButton operator={"/"} onClick={props.onHandleDiv}/>
        <Button number={7} onClick={props.onHandleInput}/>
        <Button number={8} onClick={props.onHandleInput}/>
        <Button number={9} onClick={props.onHandleInput}/>
        <OperatorButton operator={"x"} onClick={props.onHandleMul}/>
        <Button number={4} onClick={props.onHandleInput}/>
        <Button number={5} onClick={props.onHandleInput}/>
        <Button number={6} onClick={props.onHandleInput}/>
        <OperatorButton operator={"-"} onClick={props.onHandleSub}/>
        <Button number={1} onClick={props.onHandleInput}/>
        <Button number={2} onClick={props.onHandleInput}/>
        <Button number={3} onClick={props.onHandleInput}/>
        <OperatorButton operator={"+"} onClick={props.onHandleAdd}/>
        <div className="last-row">
            <button value="0" onClick={props.onHandleInput}>
                0
            </button>
            <button value="." onClick={props.onHandleInput}>
                .
            </button>
            <button className="operator" onClick={props.onHandleEquals}>
                =
            </button>
        </div>
    </div>;
}
