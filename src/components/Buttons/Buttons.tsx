import React from "react";
import {CalcBody} from "../calcBody/CalcBody";

export type ButtonsType = {
    value: number
    memory: number
    operator: string
    setValue?: (value: number) => void
    setOperator?: (operator: string) => void
    setMemory?: (memory: number) => void
};


export const Buttons = ({value, memory, operator, setValue, setOperator, setMemory}: ButtonsType) => {
     const handlingAdd = () => {
         if (setMemory && setOperator && setValue) {
             setMemory(value);
             setOperator("+");
             setValue(0);
         }
    };
    const handlingSub = () => {
        if (setMemory && setOperator && setValue) {
            setMemory(value);
            setOperator("-");
            setValue(0);
        }
    };
    const handlingMul = () => {
        if (setMemory && setOperator && setValue) {
            setMemory(value);
            setOperator("*");
            setValue(0);
        }
    };
    const handlingDiv = () => {
        if (setMemory && setOperator && setValue) {
            setMemory(value);
            setOperator("/");
            setValue(0);
        }
    };
    const handlingEquals = () => {
        if (memory && operator && value) {
            const result = eval(
                parseFloat(String(memory)) + operator + parseFloat(String(value))
            );
            if (setValue) {
                setValue(result);
            }
        }
    };
    const handlingReset = () => {
        if (setMemory && setOperator && setValue) {
            setValue(0);
            setMemory(0);
            setOperator("");
        }
    };
    const handlingInput = (e: any) => {
        if (e.target.value === "%") {
            const percent = value / 100;
            if (setValue) {
                setValue(parseFloat(String(percent)));
            }
            return;
        }
        if (e.target.value === "+/-") {
            const negativeNum = value * -1;
            if (setValue) {
                setValue(negativeNum);
            }
            return;
        }
        value += e.target.value;
        let values = String(value);
        if (values.indexOf(".") > 0) {
            if (setValue) {
                setValue(value);
            }
            return;
        }
        if (setValue) {
            setValue(parseFloat(String(value)));
        }
    };


    return (
        <div>
            <CalcBody onHandleReset={handlingReset}
                      onHandleInput={handlingInput}
                      onHandleDiv={handlingDiv}
                      onHandleMul={handlingMul}
                      onHandleSub={handlingSub}
                      onHandleAdd={handlingAdd}
                      onHandleEquals={handlingEquals}
            />
        </div>
    );
}
